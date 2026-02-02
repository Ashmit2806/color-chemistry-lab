import processDiagram from "@/assets/process-diagram.png";

export function ProcessDiagramSection() {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground leading-relaxed">
        The process diagram below illustrates the complete workflow for preparing orange dye using food additives and chemical compounds. Follow the flow from raw materials through mixing, heating, and separation to the final dye product.
      </p>
      
      <div className="relative overflow-hidden rounded-xl border border-border bg-white p-4">
        <img
          src={processDiagram}
          alt="Orange Dye Preparation Process Diagram"
          className="w-full h-auto object-contain"
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-lg bg-accent/50 p-4 border border-border">
          <div className="text-2xl font-bold text-primary mb-1">1</div>
          <h5 className="font-semibold text-card-foreground text-sm">Raw Materials</h5>
          <p className="text-xs text-muted-foreground mt-1">Chemical inputs from storage</p>
        </div>
        <div className="rounded-lg bg-accent/50 p-4 border border-border">
          <div className="text-2xl font-bold text-primary mb-1">2</div>
          <h5 className="font-semibold text-card-foreground text-sm">Mixing</h5>
          <p className="text-xs text-muted-foreground mt-1">Blending reactants uniformly</p>
        </div>
        <div className="rounded-lg bg-accent/50 p-4 border border-border">
          <div className="text-2xl font-bold text-primary mb-1">3</div>
          <h5 className="font-semibold text-card-foreground text-sm">Heating</h5>
          <p className="text-xs text-muted-foreground mt-1">Controlled reaction process</p>
        </div>
        <div className="rounded-lg bg-accent/50 p-4 border border-border">
          <div className="text-2xl font-bold text-primary mb-1">4</div>
          <h5 className="font-semibold text-card-foreground text-sm">Separation</h5>
          <p className="text-xs text-muted-foreground mt-1">Purification & collection</p>
        </div>
      </div>
    </div>
  );
}
