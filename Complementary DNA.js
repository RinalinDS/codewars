function DNAStrand(dna) {

    return dna.split('').map(m => {
        switch (m) {
            case 'A':
                return 'T'
            case 'T':
                return 'A'
            case  'G':
                return 'C'
            case  'C':
                return 'G'
        }
    }).join('')

}

console.log(DNAStrand('AATCG'));


