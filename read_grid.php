<?php
$require ('db_connect.php');

function checkBorder($raw, $column) {
  if ($column == 0) {
    return [$raw - 1, 9];
  } else {
    return [$raw, $column - 1];
  }
}

function getIds() {
  $grid = [
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
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];


  $idArray = [];
  $idDefault = 1;
  
  for ($i = 0; $i<10 ; $i++) {
    for ($j = 0; $j<10 ; $j++) {
      if ($grid[$i][$j] != 0) {
        if (array_key_exists($grid[$i][$j], $idArray)) {
          if (($i == 0) && 
          ($grid[$i][$j] == $grid[(checkBorder($i, $j)[0])][(checkBorder($i, $j)[1])])) {
            $id = $idArray[$grid[$i][$j]];
          } else if (($j == 0) && 
          ($grid[$i][$j] == $grid[$i - 1][$j])) {
            $id = $idArray[$grid[$i][$j]];
          } else if ($grid[$i][$j] == $grid[$i - 1][$j] || 
          $grid[$i][$j] == $grid[(checkBorder($i, $j)[0])][(checkBorder($i, $j)[1])]){   
            $id = $idArray[$grid[$i][$j]];
          } else {
            $idArray[$grid[$i][$j]] = $idDefault;
            $id = $idDefault;
            $idDefault++;
          }
        } else {
          $idArray[$grid[$i][$j]] = $idDefault;
          $id = $idDefault;
          $idDefault++;
        }
        $row = $i + 1;
        $col = $j + 1;
        $bateau_id = $grid[$i][$j];
      }
      
    }
  }

  return;
};

?>