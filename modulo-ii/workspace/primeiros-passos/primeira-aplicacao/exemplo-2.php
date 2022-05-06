<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo 2</title>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <style>
        .header-style {
            color: red;
        }
    </style>
</head>

<body>
    <?php
        for ($i=1; $i <= 6; $i++) { 
            print("<h$i class=\"header-style\">Header $i</h$i><br>");
        }
    ?>
    <script>
        $(document).ready(function () {
            alert("Documento pronto.");
        });
    </script>
</body>

</html>