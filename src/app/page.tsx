import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import AgentDashboard from "@/components/dashboard/AgentDashboard";
import AgentBuilder from "@/components/agents/AgentBuilder";
import WorkflowCanvas from "@/components/workflows/WorkflowCanvas";
import MultiAgent from "@/components/agents/MultiAgent";
import ToolEcosystem from "@/components/landing/ToolEcosystem";
import ActivityTimeline from "@/components/landing/ActivityTimeline";
import Metrics from "@/components/landing/Metrics";
import Pricing from "@/components/landing/Pricing";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <AgentDashboard />
      <AgentBuilder />
      <WorkflowCanvas />
      <MultiAgent />
      <ToolEcosystem />
      <ActivityTimeline />
      <Metrics />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
