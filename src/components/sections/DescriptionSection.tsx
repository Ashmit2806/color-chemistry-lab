export function DescriptionSection() {
  return (
    <div className="space-y-6 text-card-foreground">
      <p className="text-lg leading-relaxed">
        The given process diagram illustrates the industrial preparation of orange dye using a series of chemical inputs and physical operations. The entire process can be divided into four main stages: raw material input, mixing, heating and reaction, and final separation and collection of the dye. Each stage plays an essential role in converting basic chemicals into a usable dye product.
      </p>

      <div className="rounded-xl bg-accent/50 p-6 border border-border">
        <h4 className="font-display text-xl font-semibold mb-3 text-primary">1. Raw Material Input</h4>
        <p className="leading-relaxed text-muted-foreground">
          At the beginning of the process, several raw materials are supplied from storage tanks. These include water, methyl orange, sulfuric acid (H₂SO₄), dilute hydrochloric acid (HCl), acetic acid, sodium carbonate (Na₂CO₃), sodium nitrate (NaNO₃), sodium hydroxide (NaOH), sodium chloride (NaCl), and sodium sulfate (Na₂SO₄).
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Each of these chemicals has a specific function. Water acts as a solvent and reaction medium. Methyl orange serves as the base dye compound or indicator that forms the foundation of the final product. The acids, such as sulfuric acid, hydrochloric acid, and acetic acid, help control the pH and promote chemical reactions. The sodium salts and sodium hydroxide are used to neutralize acids, adjust alkalinity, and support precipitation or stabilization of the dye molecules.
        </p>
      </div>

      <div className="rounded-xl bg-accent/50 p-6 border border-border">
        <h4 className="font-display text-xl font-semibold mb-3 text-primary">2. Mixing Stage</h4>
        <p className="leading-relaxed text-muted-foreground">
          In the next stage, water, methyl orange, sulfuric acid, dilute hydrochloric acid, and acetic acid are directed into a mixer. Inside the mixer, these substances are thoroughly blended to form a uniform solution. This step ensures that all reactants are evenly distributed and that the chemical reactions can occur efficiently in later stages.
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Proper mixing is crucial because uneven distribution may lead to incomplete reactions, impurities, or uneven coloring in the final dye. The mixer therefore provides mechanical agitation until a homogeneous mixture is achieved. Once mixing is complete, the prepared solution is transferred to the heating unit for further processing.
        </p>
      </div>

      <div className="rounded-xl bg-accent/50 p-6 border border-border">
        <h4 className="font-display text-xl font-semibold mb-3 text-primary">3. Heating and Reaction Stage</h4>
        <p className="leading-relaxed text-muted-foreground">
          The mixed solution enters the heater, where it is subjected to controlled heating. At this stage, additional chemicals such as sodium carbonate, sodium nitrate, sodium hydroxide, sodium chloride, and sodium sulfate are added into the reaction vessel.
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Heating accelerates the chemical reactions between the acids, bases, and dye compounds. The temperature helps activate molecular interactions that lead to the formation and stabilization of the orange dye. The added sodium compounds help regulate acidity, promote neutralization, and assist in forming the correct dye structure.
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          The flask shown in the heater indicates that bubbling and color change may occur, suggesting that active chemical reactions are taking place. The heating continues until the reaction reaches completion and the dye solution achieves the desired concentration and color intensity.
        </p>
      </div>

      <div className="rounded-xl bg-accent/50 p-6 border border-border">
        <h4 className="font-display text-xl font-semibold mb-3 text-primary">4. Separation and Collection</h4>
        <p className="leading-relaxed text-muted-foreground">
          After the reaction is complete, the mixture is sent to the separation unit. This stage typically involves distillation or filtration to separate the pure dye from unwanted by-products, excess solvents, and residual chemicals.
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          In the separation apparatus, the mixture is heated gently so that volatile components evaporate and condense in another container, leaving behind purified dye. Alternatively, solid impurities may be filtered out, producing a clean dye solution.
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Finally, the purified orange dye is collected in storage containers as the final product. This dye is now ready for packaging and use in industries such as textiles, printing, food coloring (if food-grade), or laboratory applications.
        </p>
      </div>

      <div className="rounded-xl bg-primary/10 p-6 border border-primary/20">
        <h4 className="font-display text-xl font-semibold mb-3 text-primary">Conclusion</h4>
        <p className="leading-relaxed text-card-foreground">
          In summary, the process diagram shows a systematic method for producing orange dye through controlled mixing, heating, chemical reaction, and separation. Each stage—from raw material input to final purification—is carefully designed to ensure high product quality and consistency. The process highlights the importance of accurate chemical handling, temperature control, and proper separation techniques in industrial dye manufacturing.
        </p>
      </div>
    </div>
  );
}
