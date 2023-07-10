<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Círculo Médico | <?php echo $titulo ?? ''; ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Open+Sans&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/578e8227d9.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="build/css/app.css">
</head>

<body>

    <?php echo $contenido; ?>
    <?php echo $script ?? ''; ?>

</body>

</html>