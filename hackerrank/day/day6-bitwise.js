function getMaxLessThanK(n,k) {
   
    let highest=0;
    let bitvalue =0;

    for(let i=1; i<n; i++) {
        for(let j=i+1; j<=n; j++ ) {
            if(j > i) {
                bitvalue = i & j;

                if(bitvalue<k && bitvalue>highest)
                    highest=bitvalue;
            }
        }
    }

    return highest;
}

console.log(getMaxLessThanK(8,5));