import { cn } from "@/lib/utils";
import { Search, PenTool, Loader2, CheckCircle2, Circle } from "lucide-react";

type AgentStatus = "idle" | "active" | "complete";

interface AgentCardProps {
  type: "researcher" | "writer";
  status: AgentStatus;
  output?: string;
}

export const AgentCard = ({ type, status, output }: AgentCardProps) => {
  const isResearcher = type === "researcher";
  
  const config = {
    researcher: {
      title: "Researcher Agent",
      description: "Sourcing travel information, venues, and activities",
      icon: Search,
      gradient: "gradient-researcher",
      glow: "glow-researcher",
      borderColor: "border-researcher/30",
      textColor: "text-researcher",
    },
    writer: {
      title: "Writer Agent",
      description: "Synthesizing and formatting the travel itinerary",
      icon: PenTool,
      gradient: "gradient-writer",
      glow: "glow-writer",
      borderColor: "border-writer/30",
      textColor: "text-writer",
    },
  };

  const { title, description, icon: Icon, gradient, glow, borderColor, textColor } = config[type];

  return (
    <div
      className={cn(
        "glass rounded-xl p-6 transition-all duration-500",
        status === "active" && [glow, "border", borderColor],
        status === "complete" && "opacity-80"
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300",
            status === "active" ? gradient : "bg-muted"
          )}
        >
          <Icon className={cn(
            "w-6 h-6 transition-colors",
            status === "active" ? "text-primary-foreground" : "text-muted-foreground"
          )} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className={cn(
              "font-semibold text-lg transition-colors",
              status === "active" && textColor
            )}>
              {title}
            </h3>
            {status === "active" && (
              <div className="relative">
                <span className={cn("absolute w-2 h-2 rounded-full animate-pulse-ring", gradient)} />
                <span className={cn("relative w-2 h-2 rounded-full block", gradient)} />
              </div>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
          
          <div className="mt-4 flex items-center gap-2 text-sm">
            {status === "idle" && (
              <>
                <Circle className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Waiting...</span>
              </>
            )}
            {status === "active" && (
              <>
                <Loader2 className={cn("w-4 h-4 animate-spin", textColor)} />
                <span className={textColor}>Processing...</span>
              </>
            )}
            {status === "complete" && (
              <>
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-primary">Complete</span>
              </>
            )}
          </div>
        </div>
      </div>
      
      {output && (
        <div className="mt-4 p-4 bg-background/50 rounded-lg border border-border/50">
          <p className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">{output}</p>
        </div>
      )}
    </div>
  );
};
