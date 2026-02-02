import { Check, X } from "lucide-react";

const advantages = [
  "Produces vibrant and consistent orange color",
  "Uses readily available chemical compounds",
  "Scalable for industrial production",
  "Controlled process ensures product quality",
  "Suitable for various applications (textiles, food, laboratories)",
  "Cost-effective manufacturing process",
  "Environmentally manageable with proper treatment",
  "High color fastness in the final product"
];

const disadvantages = [
  "Requires careful handling of hazardous chemicals",
  "Need for proper safety equipment and training",
  "Waste treatment necessary for environmental compliance",
  "Energy-intensive heating process",
  "Requires precise temperature and pH control",
  "Initial setup costs for equipment",
  "Chemical storage requirements",
  "Regular quality testing needed"
];

export function AdvantagesSection() {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground leading-relaxed">
        Understanding the advantages and disadvantages of the orange dye preparation process helps in making informed decisions about its implementation and use.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
              <Check className="h-5 w-5" />
            </div>
            <h4 className="font-display text-xl font-semibold text-green-700 dark:text-green-400">
              Advantages
            </h4>
          </div>
          <ul className="space-y-3">
            {advantages.map((advantage, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                <span className="text-green-800 dark:text-green-300">{advantage}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
              <X className="h-5 w-5" />
            </div>
            <h4 className="font-display text-xl font-semibold text-red-700 dark:text-red-400">
              Disadvantages
            </h4>
          </div>
          <ul className="space-y-3">
            {disadvantages.map((disadvantage, index) => (
              <li key={index} className="flex items-start gap-3">
                <X className="h-5 w-5 shrink-0 text-red-500 mt-0.5" />
                <span className="text-red-800 dark:text-red-300">{disadvantage}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
