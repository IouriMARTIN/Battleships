"use strict";

let tableHTML = '<div style="display: flex; align-items: center">';
tableHTML += '<table border="3" style="margin-right: 5px">';

let grid = [
  [3, 0, 0, 0, 0, 0, 0, 2, 2, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 5, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 5, 0, 0, 0, 4],
  [3, 3, 3, 0, 0, 5, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5, 5, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const getRowLabel = (index) => String.fromCharCode(65 + index);

const gridGenerator = function () {
  tableHTML += "<tr><th>BATAILLE NAVALE</th>";

  for (let i = 1; i <= grid[0].length; i++) {
    tableHTML += `<th>${i}</th>`;
  }
  tableHTML += "</tr>";

  for (let i = 0; i < grid.length; i++) {
    tableHTML += `<tr><th>${getRowLabel(i)}</th>`;

    for (let j = 0; j < grid[i].length; j++) {
      tableHTML += `<td data-id=${grid[i][j]}></td>`;
    }
    tableHTML += "</tr>";
  }
  tableHTML += "</table>";

  // La légende de la bataille
  tableHTML += '<div style="border: 1px solid black; padding: 10px;">';
  tableHTML += "<ul>";
  tableHTML += "<strong><li>1 Porte-avion (5 cases)</li>";
  tableHTML += "<li>1 Croiseur (4 cases)</li>";
  tableHTML += "<li>2 Sous-marins (3 cases + 3 cases)</li>";
  tableHTML += "<li>1 Torpilleur (2 cases)</li></strong>";
  tableHTML += '<p><span style="display: inline-block; width: 15px; height: 15px; background-color: blue; margin-right: 5px;"></span>Coulé</p>';
  tableHTML += '<p><span style="display: inline-block; width: 15px; height: 15px; background-color: red; margin-right: 5px;"></span>Touché</p>';
  tableHTML += "</ul>";
  tableHTML += "</div>";
  tableHTML += "</div>";
  return tableHTML;
};

const elBody = document.querySelector("body");
elBody.innerHTML = gridGenerator();

var cells = document.querySelectorAll("td");
let shipCells = 0;
let hitCells = 0;

grid.forEach(row => {
  row.forEach(cell => {
    if (cell !== 0) {
      shipCells++;
    }
  });
});

cells.forEach(function (cell) {
  cell.addEventListener("click", function () {
    let cellsDataId = parseInt(this.getAttribute("data-id"));

    if (cellsDataId == 0) {
      this.style.background = "blue";
    } else {
      if (this.style.background !== "red") {
        this.style.background = "red";
        hitCells++;
      }
    }

    console.log("L'id de cette case est " + cellsDataId);

    if (hitCells === shipCells) {
      alert("Vous avez gagné");
    }
  });
});
