import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface WorkflowConnectorProps {
  active: boolean;
}

export const WorkflowConnector = ({ active }: WorkflowConnectorProps) => {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="relative flex items-center gap-2">
        <div
          className={cn(
            "h-0.5 w-16 transition-all duration-500",
            active 
              ? "bg-gradient-to-r from-researcher to-writer" 
              : "bg-muted"
          )}
        />
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
            active 
              ? "bg-gradient-to-r from-researcher to-writer glow-primary" 
              : "bg-muted"
          )}
        >
          <ArrowRight className={cn(
            "w-4 h-4 transition-colors",
            active ? "text-primary-foreground" : "text-muted-foreground"
          )} />
        </div>
        <div
          className={cn(
            "h-0.5 w-16 transition-all duration-500",
            active 
              ? "bg-gradient-to-r from-writer/50 to-writer" 
              : "bg-muted"
          )}
        />
      </div>
    </div>
  );
};
