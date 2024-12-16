<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Battle Ships Crew</title>
    <link rel="stylesheet" href="battleships.css">
</head>
<body>
  <script src="battleships.js" defer></script>
  <?php
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
  require ('read_grid.php');
  getIds();
  ?>
</body>
</html>
