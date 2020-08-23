const matrix = [ 
    [ 1, 1, 0, 0 ], 
    [ 0, 1, 0, 0 ], 
    [ 0, 0, 1, 0 ], 
    [ 1, 0, 0, 1 ]
];

function connectedCell(matrix) {
     
    let rows = matrix.length;
    let cols = matrix[0].length;
    let connectedMap = new Map();

    let groupedCell = 2;

    function group(r,c, groupedCell) {
        if(r<0 || r>=rows || c<0 || c>=cols || matrix[r][c] != 1) {
            return;
        }

        matrix[r][c] = groupedCell;
        if(!connectedMap[groupedCell])
        {
            connectedMap[groupedCell]=1;
        } else {
            connectedMap[groupedCell]++;
        }
            

        group(r, c-1, groupedCell); //Left
        group(r, c+1, groupedCell); //Right
        group(r-1, c, groupedCell); //Top
        group(r+1, c, groupedCell); //Bottom

        group(r-1, c-1, groupedCell); //Top Left
        group(r-1, c+1, groupedCell); //Top Right 
        group(r+1, c-1, groupedCell); //Bottom left
        group(r+1, c+1, groupedCell); //Bottom Right

    }

    for(let r=0; r < rows; r++ ) {
        for(let c=0; c < cols; c++) {
            
            if(matrix[r][c] == 1) {
                
                group(r,c, groupedCell);
                groupedCell++;
            }
        }

    }
    function findLargestConnectedCellsSize() {
        let highest=0;
        for( value in connectedMap) {
            highest = (highest < connectedMap[value]) ? connectedMap[value] : highest ;
        }

         return highest;
    }
  
    return findLargestConnectedCellsSize();
}

console.log(connectedCell(matrix));