/**
 * @param {number[][]} grid
 * @return {number}
 */

 let grid = [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
];


var maxAreaOfIsland = function(grid) {
    let maxIsland =0;
    let islandVisited = 2;
    
    const rows = grid.length;
    if(!grid[0].length) {
        return;
    } 
    const cols = grid[0].length;
    const m = new Map();

    const group = function(r, c, val){

        if(r<0 || r>=rows || c<0 || c>=cols || grid[r][c]!== 1) {
            return;
        }
         
        grid[r][c] = val;
        if(!m[val]) {
            m[val] = 1;
        } else {
            m[val]++;
        } 

        m[val]

        group(r, c-1, val); //Left
        group(r, c+1, val); //Right
        group(r-1, c, val); //Top
        group(r+1, c, val); //bottom
        
    }

    for(r=0; r<rows; r++) {
        for(c=0; c<cols; c++){

            if(grid[r][c] == 1) {

                group(r,c, islandVisited);
                islandVisited++;
            }   

        }
    }

    function highestMap() {
        let highest=0;

        for(value in m ){
            highest =  highest > m[value] ? highest : m[value];
        }

        return highest;
    }
    
     return highestMap();
    
};

console.log(maxAreaOfIsland(grid));
