const codonToProtein = (codon) => {
  const codonToProteinMap = {
    // Methionine
    AUG: "Methionine",

    // Phenylalanine
    UUU: "Phenylalanine",
    UUC: "Phenylalanine",

    // Leucine
    UUA: "Leucine",
    UUG: "Leucine",

    // Serine
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",

    // Tyrosine
    UAU: "Tyrosine",
    UAC: "Tyrosine",

    // Cysteine
    UGU: "Cysteine",
    UGC: "Cysteine",

    // Tryptophan
    UGG: "Tryptophan",

    // STOP
    UAA: "STOP",
    UAG: "STOP",
    UGA: "STOP",
  };

  const protein = codonToProteinMap[codon];

  if (!protein) throw new Error("Invalid codon");

  return protein;
};

export const translate = (rna = "") => {
  const proteins = [];
  const codons = rna.match(/.{1,3}/g);

  if (!codons) return proteins;

  for (const codon of codons) {
    const protein = codonToProtein(codon);
    if (protein === "STOP") break;
    proteins.push(protein);
  }

  return proteins;
};
