import { Beaker } from "lucide-react";

interface Chemical {
  name: string;
  formula: string;
  color: string;
  description: string;
}

const chemicals: Chemical[] = [
  {
    name: "Sulfuric Acid",
    formula: "H₂SO₄",
    color: "from-amber-500 to-orange-600",
    description: "Strong acid used for pH control and reaction promotion"
  },
  {
    name: "Sodium Hydroxide",
    formula: "NaOH",
    color: "from-blue-500 to-indigo-600",
    description: "Strong base for neutralization and alkalinity adjustment"
  },
  {
    name: "Sodium Carbonate",
    formula: "Na₂CO₃",
    color: "from-cyan-400 to-blue-500",
    description: "Used for pH buffering and dye stabilization"
  },
  {
    name: "Sodium Nitrate",
    formula: "NaNO₃",
    color: "from-green-400 to-emerald-600",
    description: "Oxidizing agent in dye formation reactions"
  },
  {
    name: "Dilute Hydrochloric Acid",
    formula: "Dil. HCl",
    color: "from-red-400 to-rose-600",
    description: "Acid for pH adjustment and reaction control"
  },
  {
    name: "Acetic Acid",
    formula: "CH₃COOH",
    color: "from-yellow-400 to-amber-500",
    description: "Weak acid for gentle pH modification"
  },
  {
    name: "Sodium Chloride",
    formula: "NaCl",
    color: "from-slate-400 to-gray-600",
    description: "Salt for precipitation and purification"
  },
  {
    name: "Sodium Sulfate",
    formula: "Na₂SO₄",
    color: "from-purple-400 to-violet-600",
    description: "Used in dye fixation and stabilization"
  }
];

export function ChemicalsSection() {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground leading-relaxed">
        The following chemicals are essential in the preparation of orange dye. Each plays a specific role in the chemical reactions that produce the final product.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {chemicals.map((chemical) => (
          <div
            key={chemical.formula}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
          >
            <div className="flex items-start gap-4">
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${chemical.color} text-white shadow-lg`}>
                <Beaker className="h-7 w-7" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-display text-lg font-semibold text-card-foreground">
                  {chemical.name}
                </h4>
                <p className="chemical-badge mt-1 mb-2 text-xs">
                  {chemical.formula}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {chemical.description}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}
