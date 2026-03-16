import { cn } from "@/lib/utils";
import { Search, PenTool, ArrowRight, Database, Send, Globe, Brain, HardDrive, Cpu, Layers } from "lucide-react";

export const ArchitectureDiagram = () => {
  return (
    <div className="glass rounded-xl p-6 space-y-6">
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        System Architecture
      </h3>

      {/* Agent Pipeline Flow */}
      <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2">
        <div className="flex flex-col items-center gap-2 shrink-0">
          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
            <Send className="w-5 h-5 text-muted-foreground" />
          </div>
          <span className="text-xs text-muted-foreground">Input</span>
        </div>

        <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />

        <div className="flex flex-col items-center gap-2 shrink-0">
          <div className="w-12 h-12 rounded-lg gradient-researcher flex items-center justify-center glow-researcher">
            <Search className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xs text-researcher font-medium">Researcher</span>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <div className="h-0.5 w-8 bg-gradient-to-r from-researcher to-writer" />
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
        </div>

        <div className="flex flex-col items-center gap-2 shrink-0">
          <div className="w-12 h-12 rounded-lg gradient-writer flex items-center justify-center glow-writer">
            <PenTool className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xs text-writer font-medium">Writer</span>
        </div>

        <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />

        <div className="flex flex-col items-center gap-2 shrink-0">
          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
            <Database className="w-5 h-5 text-muted-foreground" />
          </div>
          <span className="text-xs text-muted-foreground">Itinerary</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground pt-4 border-t border-border/50">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-researcher" />
          <span>Information Sourcing</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-writer" />
          <span>Content Synthesis</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-researcher to-writer" />
          <span>Hand-off Protocol</span>
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="pt-4 border-t border-border/50">
        <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
          Technology Stack
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Framework */}
          <div className="bg-background/50 rounded-lg p-3 space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-foreground">Framework</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full w-fit">CrewAI</span>
              <span className="block text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full w-fit">LangChain</span>
            </div>
          </div>

          {/* LLM */}
          <div className="bg-background/50 rounded-lg p-3 space-y-2">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-foreground">LLM</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full w-fit">Grok API</span>
              <span className="block text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full w-fit">Ollama</span>
            </div>
          </div>

          {/* Scraping */}
          <div className="bg-background/50 rounded-lg p-3 space-y-2">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-foreground">Scraping</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full w-fit">Tavily</span>
              <span className="block text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full w-fit">Selenium</span>
              <span className="block text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full w-fit">Serp API</span>
            </div>
          </div>

          {/* Database */}
          <div className="bg-background/50 rounded-lg p-3 space-y-2">
            <div className="flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-foreground">Database</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full w-fit">FAISS / Chroma</span>
              <span className="block text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full w-fit">MongoDB</span>
              <span className="block text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full w-fit">MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
