function staircase(n) {
    let value=0;
    let spacer = "";
    let hash = "";
     
    console.log(n);
    for(let i=0; i<n; i++) {
        spacer = "";
        hash = "";

        value = n - i -1;
        while(value) {
            spacer = spacer + " ";
            value--;
        }
        value = i + 1;
        while(value) {
            hash = hash + "#";
            value--;
        }
        console.log(spacer +  hash);
    }
    
    }
    
    staircase(6);