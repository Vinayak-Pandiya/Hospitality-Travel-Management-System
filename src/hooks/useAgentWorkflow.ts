import { useState, useCallback } from "react";
import type { TravelPreferences } from "@/components/DestinationInput";
import {
  getTransportInfo,
  getHotelInfo,
  getFoodInfo,
  getAttractions,
  getPlaceHighlights,
  getBudgetSummary,
  getAppLinks,
  getTravelTiming,
  morningActivities,
  afternoonActivities,
  eveningActivities,
} from "@/data/travelData";
import type { TransportInfo, HotelInfo, FoodInfo, AttractionInfo, BudgetSummary, AppLink, TravelTiming } from "@/data/travelData";

type AgentStatus = "idle" | "active" | "complete";

export interface ResearcherData {
  destination: string;
  days: number;
  travelerType: string;
  budget: string;
  transport: TransportInfo;
  hotels: HotelInfo[];
  food: FoodInfo[];
  attractions: AttractionInfo[];
  highlights: string[];
  budgetSummary: BudgetSummary;
  appLinks: AppLink[];
  travelTiming: TravelTiming;
}

export interface DayPlan {
  day: number;
  morning: string[];
  afternoon: string[];
  evening: string[];
}

export interface WriterData {
  destination: string;
  days: number;
  travelerType: string;
  budget: string;
  transport: TransportInfo;
  hotels: HotelInfo[];
  food: FoodInfo[];
  attractions: AttractionInfo[];
  highlights: string[];
  budgetSummary: BudgetSummary;
  appLinks: AppLink[];
  travelTiming: TravelTiming;
  dayPlans: DayPlan[];
}

interface WorkflowState {
  researcherStatus: AgentStatus;
  writerStatus: AgentStatus;
  researcherData: ResearcherData | null;
  writerData: WriterData | null;
  isLoading: boolean;
  handoffActive: boolean;
}

const initialState: WorkflowState = {
  researcherStatus: "idle",
  writerStatus: "idle",
  researcherData: null,
  writerData: null,
  isLoading: false,
  handoffActive: false,
};

const simulateResearch = async (prefs: TravelPreferences): Promise<ResearcherData> => {
  await new Promise((r) => setTimeout(r, 2000));
  return {
    destination: prefs.destination,
    days: prefs.days,
    travelerType: prefs.travelerType.charAt(0).toUpperCase() + prefs.travelerType.slice(1),
    budget: prefs.budget.charAt(0).toUpperCase() + prefs.budget.slice(1),
    transport: getTransportInfo(prefs.transport, prefs.budget),
    hotels: getHotelInfo(prefs.budget, prefs.travelerType),
    food: getFoodInfo(prefs.budget),
    attractions: getAttractions(prefs.destination),
    highlights: getPlaceHighlights(prefs.destination),
    budgetSummary: getBudgetSummary(prefs.budget, prefs.days),
    appLinks: getAppLinks(prefs.destination),
    travelTiming: getTravelTiming(),
  };
};

const simulateWriting = async (research: ResearcherData, prefs: TravelPreferences): Promise<WriterData> => {
  await new Promise((r) => setTimeout(r, 2500));

  const dayPlans: DayPlan[] = Array.from({ length: prefs.days }, (_, i) => ({
    day: i + 1,
    morning: morningActivities[i % morningActivities.length],
    afternoon: afternoonActivities[(i + 2) % afternoonActivities.length],
    evening: eveningActivities[(i + 4) % eveningActivities.length],
  }));

  return { ...research, dayPlans };
};

export const useAgentWorkflow = () => {
  const [state, setState] = useState<WorkflowState>(initialState);

  const runWorkflow = useCallback(async (prefs: TravelPreferences) => {
    setState({ ...initialState, isLoading: true, researcherStatus: "active" });

    try {
      const research = await simulateResearch(prefs);
      setState((s) => ({ ...s, researcherStatus: "complete", researcherData: research, handoffActive: true }));

      await new Promise((r) => setTimeout(r, 800));
      setState((s) => ({ ...s, writerStatus: "active", handoffActive: false }));

      const itinerary = await simulateWriting(research, prefs);
      setState((s) => ({ ...s, writerStatus: "complete", writerData: itinerary, isLoading: false }));
    } catch (error) {
      console.error("Workflow error:", error);
      setState((s) => ({ ...s, isLoading: false }));
    }
  }, []);

  const reset = useCallback(() => setState(initialState), []);

  return { ...state, runWorkflow, reset };
};
