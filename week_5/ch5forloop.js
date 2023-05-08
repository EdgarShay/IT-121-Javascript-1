const grid = [];
const cells = 64;
let counter = 0;
let row; 
//create 8 rows/column and last number in the cell is 64
for (let x = 0; x < cells + 1; x++) {
    if (counter % 8 == 0) {
        if (row != undefined) {        
            grid.push(row);
        }
        row = [];
    }
    counter++;
    let temp = counter;
    row.push(temp);
 
}
console.table(grid);

