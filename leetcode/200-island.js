const grid_1 = [
    ["1","0","1","0","0"],
    ["0","0","0","0","0"],
    ["0","0","1","1","0"],
    ["0","0","0","1","1"]
];

const grid_2 = [
    ["1","1","1","0","0"],
    ["0","0","0","0","0"],
    ["0","0","1","1","0"],
    ["0","0","0","1","1"]
];


const grid_3 = [
    ["1","1","1","0","0"],
    ["0","0","1","0","0"],
    ["0","0","1","1","0"],
    ["0","0","0","1","1"]
];

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    const row = grid.length;
    if(row==0 || !grid[0])    
        return 0;
    const col = grid[0].length;

    let no_of_islands = 0;

    function mark_current_island(r, c) {

    
        if(r<0 || r>=row || c<0 || c>=col || grid[r][c]!== '1') {
            return;
        }

        grid[r][c] = '2';

        mark_current_island(r+1,c);  //DOWN
        mark_current_island(r,c+1);  //RIGHT
        mark_current_island(r-1,c);  //TOP
        mark_current_island(r,c-1);  //LEFT


        // grid[r][c] = grid[r][c] == 1 ? count : 1;

                if(grid[r][c] === '1' ) {
                    grid[r][c] = val;
                } 
            
    }

    for(let r=0; r<row; r++){
        for(let c=0; c<col; c++) {
            
            if(grid[r][c] ==='1')
                {
                    mark_current_island(r,c);
                    no_of_islands++;
                }
        }
    }




    return no_of_islands;
    
};

console.log(numIslands(grid_1));
console.log(numIslands(grid_2));
console.log(numIslands(grid_3));



