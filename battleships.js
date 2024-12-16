"use strict";

let tableHTML = '<div style="display: flex; align-items: flex-start;">';
tableHTML += '<div id="battle-grid" style="margin-right: 20px;">';

const getRowLabel = (index) => String.fromCharCode(65 + index);

const gridGenerator = function () {
  let html = '<table border="3" style="border-collapse: collapse;">';
  html += "<tr><th>BATAILLE NAVALE</th>";

  for (let i = 1; i <= 10; i++) {
    html += `<th>${i}</th>`;
  }
  html += "</tr>";

  for (let i = 0; i < 12; i++) {
    html += `<tr><th>${getRowLabel(i)}</th>`;

    for (let j = 0; j < 10; j++) {
      html += `<td data-id="0" style="width: 30px; height: 30px; text-align: center;"></td>`;
    }
    html += "</tr>";
  }
  html += "</table>";
  return html;
};

tableHTML += gridGenerator();
tableHTML += "</div>";
tableHTML += '<div id="legend-scores" style="display: flex; flex-direction: column;">';
tableHTML += '<div id="scoreboard" style="margin-bottom: 20px;">';
tableHTML += '<h3>Tableau des scores</h3>';
tableHTML += '<p id="scores">Joueur 1 : 0 | Joueur 2 : 0</p>';
tableHTML += '<p id="current-turn">Tour de : Joueur 1</p>';
tableHTML += '</div>';
tableHTML += '<div id="legend" style="text-align: left;">';
tableHTML += '<h3>Légende</h3>';
tableHTML += '<ul id="ship-status">';

const ships = {
  2: { name: "Sous-marin", size: 3, remaining: 3 },
  3: { name: "Torpilleur", size: 3, remaining: 3 },
  4: { name: "Croiseur", size: 4, remaining: 4 },
  5: { name: "Porte-avion", size: 5, remaining: 5 }
};

Object.keys(ships).forEach(id => {
  const ship = ships[id];
  tableHTML += `<li>${ship.name} (${ship.size} cases) : <span id="ship-${id}">Intact</span></li>`;
});

tableHTML += '</ul>';
tableHTML += '<p><span style="display: inline-block; width: 15px; height: 15px; background-color: red; margin-right: 5px;"></span>Touché</p>';
tableHTML += '<p><span style="display: inline-block; width: 15px; height: 15px; background-color: blue; margin-right: 5px;"></span>Coulé</p>';
tableHTML += '</div>';

tableHTML += '</div>';
tableHTML += '</div>';

const elBody = document.querySelector("body");
elBody.innerHTML = tableHTML;

const cells = document.querySelectorAll("td");
let shipCells = 0;
let hitCells = 0;
let currentPlayer = 1; 
const scores = { 1: 0, 2: 0 };

const grid = [
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 5, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 5, 0, 0, 0, 4],
  [3, 3, 3, 0, 0, 5, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5, 5, 5, 0],
  [2, 2, 0, 0, 0, 0, 0, 0, 0, 0]
];

grid.forEach(row => {
  row.forEach(cell => {
    if (cell !== 0) {
      shipCells++;
    }
  });
});

const updateScores = () => {
  const scoreElement = document.getElementById("scores");
  scoreElement.innerText = `Joueur 1 : ${scores[1]} | Joueur 2 : ${scores[2]}`;
};

const updateCurrentPlayer = () => {
  const turnElement = document.getElementById("current-turn");
  turnElement.innerText = `Tour de : Joueur ${currentPlayer}`;
};

cells.forEach((cell, i) => {
  const x = Math.floor(i / 10);
  const y = i % 10;
  const cellValue = grid[x][y];

  cell.setAttribute("data-id", cellValue);

  cell.addEventListener("click", function () {
    if (this.style.background === "red" || this.style.background === "blue") return;

    if (cellValue === 0) {
      this.style.background = "blue";
    } else if (cellValue in ships) {
      this.style.background = "red";
      hitCells++;
      ships[cellValue].remaining--;
      scores[currentPlayer]++;
      updateScores();
    }

    currentPlayer = currentPlayer === 1 ? 2 : 1;
    updateCurrentPlayer();

    if (hitCells === shipCells) {
      alert("Partie terminée !");
    }
  });
});
