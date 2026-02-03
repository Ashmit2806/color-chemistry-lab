import { Check, X, Lightbulb } from "lucide-react";

const advantages = [
  { title: "Safe for food use", description: "Food additives are approved for consumption (within limits), so colour identification is safer compared to industrial dyes." },
  { title: "Cost-effective", description: "Most food colours and additives are inexpensive and easily available in the market." },
  { title: "Easy identification", description: "Specific additives give characteristic colours, making colour recognition simple and quick." },
  { title: "Simple process", description: "The method does not require complex instruments—can be done in a basic lab or classroom." },
  { title: "Useful in quality control", description: "Helps detect artificial colours or confirm permitted food colours in food products." },
  { title: "Educational value", description: "Very useful for students to understand food chemistry, additives, and colour reactions." },
];

const disadvantages = [
  { title: "Limited accuracy", description: "Different additives may produce similar colours, leading to confusion or errors." },
  { title: "Concentration dependent", description: "Colour intensity changes with quantity, so exact measurement is important." },
  { title: "Interference from food components", description: "Natural pigments, fats, or sugars in food can affect the colour result." },
  { title: "Not suitable for all foods", description: "Some complex or dark-coloured foods make colour identification difficult." },
  { title: "Regulatory limitations", description: "Only permitted additives can be used; some colours are banned or restricted." },
  { title: "Health concerns if misused", description: "Excessive or improper use of additives can cause health issues." },
];

const applicationText = `Color additives are widely used in various industries to enhance appearance, improve identification, and increase consumer appeal. In the food industry, they are added to beverages, candies, bakery items, sauces, and dairy products to make them visually attractive; in pharmaceuticals, they help in identifying tablets, capsules, and syrups and improve patient acceptance. Color additives are also extensively used in cosmetics and personal care products such as lipsticks, nail polish, creams, soaps, and shampoos. In addition, they are applied in the textile industry for coloring fabrics, in paints, inks, and coatings for decorative and protective purposes, in plastics and packaging to improve product appearance, in paper and printing for better visual quality, in agriculture for seed and pesticide identification, and in medical and diagnostic fields as staining and labeling agents.`;

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
          <ul className="space-y-4">
            {advantages.map((advantage, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 shrink-0 text-green-500 mt-1" />
                <div>
                  <span className="font-semibold text-green-700 dark:text-green-300">{advantage.title}</span>
                  <p className="text-sm text-green-800/80 dark:text-green-300/80 mt-0.5">{advantage.description}</p>
                </div>
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
          <ul className="space-y-4">
            {disadvantages.map((disadvantage, index) => (
              <li key={index} className="flex items-start gap-3">
                <X className="h-5 w-5 shrink-0 text-red-500 mt-1" />
                <div>
                  <span className="font-semibold text-red-700 dark:text-red-300">{disadvantage.title}</span>
                  <p className="text-sm text-red-800/80 dark:text-red-300/80 mt-0.5">{disadvantage.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Applications Section */}
      <div className="rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">
            <Lightbulb className="h-5 w-5" />
          </div>
          <h4 className="font-display text-xl font-semibold text-blue-700 dark:text-blue-400">
            Applications
          </h4>
        </div>
        <p className="text-blue-800/90 dark:text-blue-300/90 leading-relaxed">
          {applicationText}
        </p>
      </div>
    </div>
  );
}