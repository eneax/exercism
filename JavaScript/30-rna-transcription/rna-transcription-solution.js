const rna = {
  C: "G",
  G: "C",
  T: "A",
  A: "U",
};

export const toRna = (dna) =>
  dna
    .split("")
    .map((nucleotide) => rna[nucleotide])
    .join("");
