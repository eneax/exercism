export const countNucleotides = (strand) => {
  const nucleotides = ["A", "C", "G", "T"];
  const nucleotideCounts = [0, 0, 0, 0];

  strand.split("").forEach((nucleotide) => {
    const index = nucleotides.indexOf(nucleotide);
    if (index === -1) {
      throw new Error("Invalid nucleotide in strand");
    }
    nucleotideCounts[index]++;
  });

  return nucleotideCounts.join(" ");
};
