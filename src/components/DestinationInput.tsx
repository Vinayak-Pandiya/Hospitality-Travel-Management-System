import { useState } from "react";
import { cn } from "@/lib/utils";
import { MapPin, Sparkles, Loader2, Car, Bus, Train, Plane, Hotel, Utensils } from "lucide-react";

export type TransportMode = "car" | "bus" | "train" | "flight";
export type BudgetLevel = "budget" | "mid-range" | "luxury";
export type TravelerType = "tourist" | "business" | "family" | "backpacker" | "friend";

export interface TravelPreferences {
  destination: string;
  days: number;
  transport: TransportMode;
  budget: BudgetLevel;
  travelerType: TravelerType;
}

interface DestinationInputProps {
  onSubmit: (preferences: TravelPreferences) => void;
  isLoading: boolean;
}

export const DestinationInput = ({ onSubmit, isLoading }: DestinationInputProps) => {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(3);
  const [transport, setTransport] = useState<TransportMode>("flight");
  const [budget, setBudget] = useState<BudgetLevel>("mid-range");
  const [travelerType, setTravelerType] = useState<TravelerType>("tourist");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination.trim() && !isLoading) {
      onSubmit({ destination: destination.trim(), days, transport, budget, travelerType });
    }
  };

  const transportOptions = [
    { value: "car", label: "Car", icon: Car },
    { value: "bus", label: "Bus", icon: Bus },
    { value: "train", label: "Train", icon: Train },
    { value: "flight", label: "Flight", icon: Plane },
  ];

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      {/* Main Input Row */}
      <div className="glass rounded-2xl p-2 flex flex-col sm:flex-row gap-2">
        <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-background/50 rounded-xl">
          <MapPin className="w-5 h-5 text-primary shrink-0" />
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter destination (e.g., Tokyo, Japan)"
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
            disabled={isLoading}
          />
        </div>
        
        <div className="flex items-center gap-2 px-4 py-3 bg-background/50 rounded-xl sm:w-32">
          <select
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="flex-1 bg-transparent border-none outline-none text-foreground cursor-pointer"
            disabled={isLoading}
          >
            {[1, 2, 3, 4, 5, 7, 10, 14].map((d) => (
              <option key={d} value={d} className="bg-card text-foreground">
                {d} {d === 1 ? "day" : "days"}
              </option>
            ))}
          </select>
        </div>
        
        <button
          type="submit"
          disabled={!destination.trim() || isLoading}
          className={cn(
            "px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2",
            "bg-gradient-to-r from-researcher to-writer",
            "hover:shadow-lg hover:shadow-primary/25",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none",
            "text-primary-foreground"
          )}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Processing</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Generate</span>
            </>
          )}
        </button>
      </div>

      {/* Preferences Row */}
      <div className="glass rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Transport Mode */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
            <Car className="w-3 h-3" /> Transport
          </label>
          <div className="flex gap-1">
            {transportOptions.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                type="button"
                onClick={() => setTransport(value as TransportMode)}
                disabled={isLoading}
                className={cn(
                  "flex-1 flex flex-col items-center gap-1 p-2 rounded-lg transition-all text-xs",
                  transport === value
                    ? "bg-primary text-primary-foreground"
                    : "bg-background/50 text-muted-foreground hover:bg-background/80"
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Budget Level */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
            <Hotel className="w-3 h-3" /> Budget
          </label>
          <div className="flex gap-1">
            {(["budget", "mid-range", "luxury"] as BudgetLevel[]).map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setBudget(level)}
                disabled={isLoading}
                className={cn(
                  "flex-1 p-2 rounded-lg transition-all text-xs capitalize",
                  budget === level
                    ? "bg-primary text-primary-foreground"
                    : "bg-background/50 text-muted-foreground hover:bg-background/80"
                )}
              >
                {level === "budget" ? "💰 Budget" : level === "mid-range" ? "💎 Mid" : "👑 Luxury"}
              </button>
            ))}
          </div>
        </div>

        {/* Traveler Type */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
            <Utensils className="w-3 h-3" /> Traveler
          </label>
          <select
            value={travelerType}
            onChange={(e) => setTravelerType(e.target.value as TravelerType)}
            className="w-full p-2 bg-background/50 rounded-lg border-none outline-none text-foreground text-sm cursor-pointer"
            disabled={isLoading}
          >
            <option value="tourist" className="bg-card">🎒 Tourist</option>
            <option value="business" className="bg-card">💼 Business</option>
            <option value="family" className="bg-card">👨‍👩‍👧 Family</option>
            <option value="friend" className="bg-card">👫 Friends</option>
            <option value="backpacker" className="bg-card">🏕️ Backpacker</option>
          </select>
        </div>
      </div>
    </form>
  );
};
