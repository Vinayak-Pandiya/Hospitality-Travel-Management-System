import { Bot, Github, Zap } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-researcher to-writer flex items-center justify-center glow-primary">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-semibold text-foreground">Multi-Agent Hospitality</h1>
            <p className="text-xs text-muted-foreground">AI-Powered Travel Planning</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 glass rounded-full text-xs text-muted-foreground">
            <Zap className="w-3 h-3 text-primary" />
            <span>Powered by LLM</span>
          </div>
        </div>
      </div>
    </header>
  );
};
