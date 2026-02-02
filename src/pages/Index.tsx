import { useState } from "react";
import { FileText, Beaker, Workflow, Video, ThumbsUp, Film, Droplets } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SectionCard } from "@/components/SectionCard";
import { SectionModal } from "@/components/SectionModal";
import { DescriptionSection } from "@/components/sections/DescriptionSection";
import { ChemicalsSection } from "@/components/sections/ChemicalsSection";
import { ProcessDiagramSection } from "@/components/sections/ProcessDiagramSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { AnimatedVideosSection } from "@/components/sections/AnimatedVideosSection";

type ModalType = "description" | "chemicals" | "process" | "video" | "advantages" | "animated" | null;

const Index = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const sections = [
    {
      id: "description" as const,
      title: "Description",
      description: "Learn about the complete process of preparing orange dye from food additives",
      icon: FileText,
      gradient: true,
    },
    {
      id: "chemicals" as const,
      title: "Chemicals Used",
      description: "Explore the chemical compounds and their roles in dye preparation",
      icon: Beaker,
      gradient: false,
    },
    {
      id: "process" as const,
      title: "Process Diagram",
      description: "Visual flowchart showing the step-by-step manufacturing process",
      icon: Workflow,
      gradient: false,
    },
    {
      id: "video" as const,
      title: "Video Demonstration",
      description: "Watch the practical demonstration of the dye preparation",
      icon: Video,
      gradient: true,
    },
    {
      id: "advantages" as const,
      title: "Advantages & Disadvantages",
      description: "Understand the pros and cons of this dye preparation method",
      icon: ThumbsUp,
      gradient: false,
    },
    {
      id: "animated" as const,
      title: "Animated Videos",
      description: "Add and view animated educational videos about chemistry",
      icon: Film,
      gradient: false,
    },
  ];

  const renderModalContent = () => {
    switch (activeModal) {
      case "description":
        return <DescriptionSection />;
      case "chemicals":
        return <ChemicalsSection />;
      case "process":
        return <ProcessDiagramSection />;
      case "video":
        return <VideoSection />;
      case "advantages":
        return <AdvantagesSection />;
      case "animated":
        return <AnimatedVideosSection />;
      default:
        return null;
    }
  };

  const getModalTitle = () => {
    switch (activeModal) {
      case "description":
        return "Process Description";
      case "chemicals":
        return "Chemicals Used";
      case "process":
        return "Process Diagram";
      case "video":
        return "Video Demonstration";
      case "advantages":
        return "Advantages & Disadvantages";
      case "animated":
        return "Animated Videos";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/30" />
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6 animate-fade-in">
              <Droplets className="h-4 w-4" />
              Chemistry Project
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Identifying <span className="gradient-text">Color</span> Using
              <br />
              Food Additives
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Explore the fascinating process of preparing orange dye through chemical reactions, 
              from raw materials to the final vibrant product.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <span className="chemical-badge">H₂SO₄</span>
              <span className="chemical-badge">NaOH</span>
              <span className="chemical-badge">Na₂CO₃</span>
              <span className="chemical-badge">NaNO₃</span>
              <span className="chemical-badge">CH₃COOH</span>
            </div>
          </div>
        </div>
      </header>

      {/* Sections Grid */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Explore the Process
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Click on any section below to learn more about the orange dye preparation process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="animate-slide-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <SectionCard
                title={section.title}
                description={section.description}
                icon={section.icon}
                onClick={() => setActiveModal(section.id)}
                gradient={section.gradient}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Chemistry Educational Project — Identifying Color Using Food Additives
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Orange Dye Preparation Process
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <SectionModal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={getModalTitle()}
      >
        {renderModalContent()}
      </SectionModal>
    </div>
  );
};

export default Index;
