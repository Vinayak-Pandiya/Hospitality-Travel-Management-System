import { cn } from "@/lib/utils";
import { MapPin, Sparkles, Star, ExternalLink, Utensils, Hotel, Plane, Landmark, DollarSign, Clock, Users, CalendarClock } from "lucide-react";
import type { WriterData, DayPlan } from "@/hooks/useAgentWorkflow";

interface ItineraryOutputProps {
  data: WriterData | null;
  isLoading: boolean;
}

const SectionHeader = ({ icon: Icon, title, className }: { icon: React.ElementType; title: string; className?: string }) => (
  <div className={cn("flex items-center gap-2 mb-3", className)}>
    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
      <Icon className="w-4 h-4 text-primary" />
    </div>
    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">{title}</h4>
  </div>
);

const DayCard = ({ plan }: { plan: DayPlan }) => (
  <div className="glass rounded-xl p-4 space-y-3">
    <div className="flex items-center gap-2 pb-2 border-b border-border/30">
      <span className="text-lg font-bold text-primary">Day {plan.day}</span>
    </div>
    <div className="space-y-2">
      <div>
        <span className="text-xs font-medium text-muted-foreground uppercase">🌅 Morning</span>
        <ul className="mt-1 space-y-0.5">
          {plan.morning.map((a, i) => <li key={i} className="text-sm text-foreground/85">{a}</li>)}
        </ul>
      </div>
      <div>
        <span className="text-xs font-medium text-muted-foreground uppercase">☀️ Afternoon</span>
        <ul className="mt-1 space-y-0.5">
          {plan.afternoon.map((a, i) => <li key={i} className="text-sm text-foreground/85">{a}</li>)}
        </ul>
      </div>
      <div>
        <span className="text-xs font-medium text-muted-foreground uppercase">🌙 Evening</span>
        <ul className="mt-1 space-y-0.5">
          {plan.evening.map((a, i) => <li key={i} className="text-sm text-foreground/85">{a}</li>)}
        </ul>
      </div>
    </div>
  </div>
);

export const ItineraryOutput = ({ data, isLoading }: ItineraryOutputProps) => {
  if (isLoading) {
    return (
      <div className="glass rounded-xl p-8 space-y-4">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          <span className="text-muted-foreground">Generating your itinerary...</span>
        </div>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="animate-shimmer h-4 rounded" style={{ width: `${80 - i * 10}%` }} />
          ))}
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="glass rounded-xl p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
          <MapPin className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2">Ready to Plan</h3>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto">
          Enter a destination above and watch our AI agents collaborate to create your perfect itinerary.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-fade-in">
      {/* ─── Header ─── */}
      <div className="glass rounded-xl p-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg gradient-writer flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-bold text-foreground text-lg">{data.destination}</h3>
            <p className="text-xs text-muted-foreground">{data.days}-Day {data.travelerType} Trip · {data.budget} Budget</p>
          </div>
        </div>
      </div>

      {/* ─── Place Highlights ─── */}
      <div className="glass rounded-xl p-5">
        <SectionHeader icon={Star} title="What Makes This Place Special" />
        <ul className="space-y-1.5">
          {data.highlights.map((h, i) => (
            <li key={i} className="text-sm text-foreground/85 flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* ─── Budget Summary (Total Package) ─── */}
      <div className="glass rounded-xl p-5">
        <SectionHeader icon={DollarSign} title="Total Package Estimate" />
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Accommodation", value: data.budgetSummary.accommodation },
            { label: "Transport", value: data.budgetSummary.transport },
            { label: "Food & Dining", value: data.budgetSummary.food },
            { label: "Activities", value: data.budgetSummary.activities },
          ].map(({ label, value }) => (
            <div key={label} className="bg-background/50 rounded-lg p-3 text-center">
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 bg-primary/10 rounded-lg p-3 text-center">
          <p className="text-xs text-muted-foreground">Estimated Total</p>
          <p className="text-lg font-bold text-primary">{data.budgetSummary.total}</p>
        </div>
      </div>

      {/* ─── Transport ─── */}
      <div className="glass rounded-xl p-5">
        <SectionHeader icon={Plane} title="Transportation" />
        <div className="bg-background/50 rounded-lg p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-medium text-foreground text-sm">{data.transport.name}</span>
            <span className="text-xs font-mono text-primary">{data.transport.price}</span>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={cn("w-3 h-3", i < data.transport.rating ? "text-primary fill-primary" : "text-muted-foreground/30")} />
            ))}
            <span className="text-xs text-muted-foreground ml-1">{data.transport.rating}/5</span>
          </div>
          <p className="text-xs text-muted-foreground italic">"{data.transport.review}"</p>
          <p className="text-xs text-primary">💡 {data.transport.tip}</p>
        </div>
      </div>

      {/* ─── Hotels ─── */}
      <div className="glass rounded-xl p-5">
        <SectionHeader icon={Hotel} title="Accommodation" />
        <div className="space-y-3">
          {data.hotels.map((h, i) => (
            <div key={i} className="bg-background/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-foreground text-sm">{h.name}</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                  {h.type}
                </span>
              </div>
              <p className="text-xs text-primary font-mono">{h.price} {h.rating}</p>
              <p className="text-xs text-muted-foreground mt-1">{h.features}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Nearest Restaurants ─── */}
      <div className="glass rounded-xl p-5">
        <SectionHeader icon={Utensils} title="Nearest Restaurants" />
        <div className="space-y-3">
          {data.food.map((f, i) => (
            <div key={i} className="bg-background/50 rounded-lg p-3 flex items-start justify-between gap-3">
              <div className="flex-1">
                <p className="font-medium text-foreground text-sm">{f.type}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{f.tip}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs font-mono text-primary">{f.price}</p>
                <p className="text-[10px] text-muted-foreground">📍 {f.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Attractions & Landmarks ─── */}
      <div className="glass rounded-xl p-5">
        <SectionHeader icon={Landmark} title="Attractions & Landmarks" />
        <div className="space-y-2">
          {data.attractions.map((a, i) => (
            <div key={i} className="bg-background/50 rounded-lg p-3 flex items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground text-sm">{a.name}</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-muted px-1.5 py-0.5 rounded-full">
                    {a.type}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                  <span>🎟️ {a.entryFee}</span>
                  <span>⏱️ {a.duration}</span>
                  <span className="flex items-center gap-0.5">
                    <Users className="w-3 h-3" />
                    {a.bestFor.join(", ")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Travel Timing ─── */}
      <div className="glass rounded-xl p-5">
        <SectionHeader icon={CalendarClock} title="Travel Timing" />
        <div className="space-y-2">
          {[
            { label: "Best Time to Visit", value: data.travelTiming.bestTime },
            { label: "Peak Season", value: data.travelTiming.peakSeason },
            { label: "Off Season", value: data.travelTiming.offSeason },
            { label: "Daily Start", value: data.travelTiming.suggestedStart },
            { label: "Daily End", value: data.travelTiming.suggestedEnd },
            { label: "Hotel Check-in", value: data.travelTiming.checkIn },
            { label: "Hotel Check-out", value: data.travelTiming.checkOut },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-start justify-between gap-3 bg-background/50 rounded-lg p-3">
              <span className="text-xs font-medium text-muted-foreground shrink-0">{label}</span>
              <span className="text-xs text-foreground text-right">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Day-wise Schedule ─── */}
      <div className="glass rounded-xl p-5">
        <SectionHeader icon={Clock} title="Day-by-Day Schedule" />
        <div className="space-y-3">
          {data.dayPlans.map((plan) => (
            <DayCard key={plan.day} plan={plan} />
          ))}
        </div>
      </div>

      {/* ─── Book via Apps ─── */}
      <div className="glass rounded-xl p-5">
        <SectionHeader icon={ExternalLink} title="Book & Compare" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {data.appLinks.map((app) => (
            <a
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/50 hover:bg-background/80 rounded-lg p-3 text-center transition-colors group"
            >
              <span className="text-2xl block mb-1">{app.icon}</span>
              <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{app.name}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{app.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* ─── Footer ─── */}
      <div className="text-center py-3">
        <p className="text-xs text-muted-foreground">
          Generated by Multi-Agent Hospitality System · 🤖 Researcher Agent → Writer Agent
        </p>
      </div>
    </div>
  );
};
