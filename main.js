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
    },
    // compute how many bases are identical between 
    // two objects and in the same locations
    compareDNA (pAeuqor) {
      let commonBases = 0;
      for (let i = 0; i < this.DNA.length; i++) {
        if (this.DNA[i] === pAeuqor.DNA[i]) {
          commonBases++;
        }
      };
      console.log(`specimen #1 and specimen #2 have ${Math.floor((commonBases / 15) * 100)}% DNA in common.`);
    },
    // returns true if the object’s .dna array contains at least 
    // 60% 'C' or 'G' bases
    willLikelySurvive () {
      let luckyBases = 0;
      for (let i = 0; i < this.DNA.length; i++) {
        if(this.DNA[i] === 'C' || this.DNA[i] === 'G')
          luckyBases++;
      };
      
      if(Math.floor((luckyBases / 15) * 100) > 60)
        return true;
      else
        return false;
    }
  }
}