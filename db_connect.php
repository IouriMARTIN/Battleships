<?php
  $host = 'localhost';
  $dbname = 'BattleShips';
  $username = 'ProjectSQL';
  $password = 'Ships';
  
  try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    $id = ;
    $row = ;
    $col = ;
    $bateau_id = ;

    $sql = "INSERT INTO ShipsPos () VALUES ()";
    $stmt = = $pdo->prepare($sql);

    $stmt->bindParam(':exemple', $exemple, PDO::PARAM_INT);

    $stmt->execute();
  } catch (PDOException $e) {
    echo "Erreur de connexion ou d'exe de la requete :" . $e->message();
  }
?>