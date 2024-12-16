<?php
  $host = 'localhost';
  $dbname = 'BattleShips';
  $username = 'ProjectSQL';
  $password = 'Ships';
  
  try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    $sql = "INSERT INTO ShipsPos (id, `row`, col, bateau_id) VALUES (:id, :`row`, :col, bateau_id)";

    $stmt = $pdo->prepare($sql);

    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->bindParam('row', $row, PDO::PARAM_INT);
    $stmt->bindParam('col', $col, PDO::PARAM_INT);
    $stmt->bindParam('bateau_id', $bateau_id, PDO::PARAM_INT);

    $stmt->execute();
    var_dump("i tried");
  } catch (PDOException $e) {
    echo "Erreur de connexion ou d'exe de la requete :" . $e->message();
  }
?>