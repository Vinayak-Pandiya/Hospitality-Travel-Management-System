import { Header } from "@/components/Header";
import { DestinationInput } from "@/components/DestinationInput";
import { AgentCard } from "@/components/AgentCard";
import { WorkflowConnector } from "@/components/WorkflowConnector";
import { ItineraryOutput } from "@/components/ItineraryOutput";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { useAgentWorkflow } from "@/hooks/useAgentWorkflow";

const Index = () => {
  const {
    researcherStatus,
    writerStatus,
    researcherData,
    writerData,
    isLoading,
    handoffActive,
    runWorkflow,
  } = useAgentWorkflow();

  // Build a summary string for the researcher card output
  const researcherSummary = researcherData
    ? `📍 ${researcherData.destination} · ${researcherData.days} days · ${researcherData.travelerType}\n🚗 ${researcherData.transport.name} (${researcherData.transport.price})\n🏨 ${researcherData.hotels.length} options found\n🍽️ ${researcherData.food.length} dining categories\n🏛️ ${researcherData.attractions.length} attractions\n💰 Total: ${researcherData.budgetSummary.total}`
    : undefined;

  return (
    <div className="min-h-screen bg-background">
      {/* Background gradient effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-researcher/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-writer/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Multi-Agent</span>
              <br />
              <span className="text-foreground">Hospitality System</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Experience collaborative AI agents working together to craft your perfect travel itinerary 
              with personalized transport, hotel, and dining recommendations.
            </p>
          </section>

          {/* Input Section */}
          <section className="mb-12">
            <DestinationInput onSubmit={runWorkflow} isLoading={isLoading} />
          </section>

          {/* Agent Workflow Section */}
          <section className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Agent Pipeline
              </h2>
              
              <AgentCard
                type="researcher"
                status={researcherStatus}
                output={researcherSummary}
              />
              
              <WorkflowConnector active={handoffActive || writerStatus === "active"} />
              
              <AgentCard
                type="writer"
                status={writerStatus}
              />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Generated Output
              </h2>
              <ItineraryOutput
                data={writerData}
                isLoading={isLoading && writerStatus === "active"}
              />
            </div>
          </section>

          {/* Architecture Section */}
          <section className="mb-12">
            <ArchitectureDiagram />
          </section>

          {/* Tech Stack */}
          <section className="text-center py-8 border-t border-border/50">
            <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
              Built with
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="px-3 py-1 glass rounded-full">React</span>
              <span className="px-3 py-1 glass rounded-full">TypeScript</span>
              <span className="px-3 py-1 glass rounded-full">LangChain</span>
              <span className="px-3 py-1 glass rounded-full">CrewAI</span>
              <span className="px-3 py-1 glass rounded-full">LLM API</span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
