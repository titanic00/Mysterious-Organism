// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// factory function
const pAequorFactory = (number, DNA) => {
    
    return {
    specimenNum: number,
    DNA,
    // selects a base in the object’s dna property and 
    // changing the current base to a different base
    mutate () {
        let mutation = returnRandBase();
        const placeInDNA = Math.floor(Math.random() * 15);
        while(mutation === this.DNA[placeInDNA]) {
            mutation = returnRandBase();
        };
        this.DNA[placeInDNA] = mutation;
    }
  }
}