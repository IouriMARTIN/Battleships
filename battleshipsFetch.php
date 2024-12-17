<?php
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['grid'])) {
    $grille = $data['grid'];

    $nombreBateaux = 0;
    foreach ($grille as $ligne) {
        foreach ($ligne as $cellule) {
            if ($cellule > 0) {
                $nombreBateaux++;
            }
        }
    }
    
    header("Content-Type: application/json");
    echo json_encode([
        "message" => "Grille reçue avec succès.",
        "nombreBateaux" => $nombreBateaux,
        "details" => $grille
    ]);
} else {
    http_response_code(400);
    echo json_encode(["message" => "Aucune grille reçue."]);
}
?>
