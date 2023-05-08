
// table with 10 rows and 10 columns
const table = document.getElementById('mult-table');
const size = 10;

// Create the table rows and columns
for (let i = 1; i <= size; i++) {
  let row = table.insertRow();
  for (let j = 1; j <= size; j++) {
    let cell = row.insertCell();
    cell.textContent = i * j;
  }
}