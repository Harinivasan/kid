<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enchanting Learning</title>

    <link rel="stylesheet" href="jumble.css">

    <link href="img/favicon.ico" rel="icon">

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body>
    <section class="head">
        <h1 class="m-0 text-primary"><i class="fa fa-book-reader me-3"> Jumbled Words</i></h1>    
    </section>

    <section class="top">
        
            <nav>
                <ul>
                    <li><a href="index.php">HOME</a></li>

                    <li><a href="classes.php">EXIT</a></li>
                </ul>
            </nav>
    </section>

    <div id="container">
        <h1>Jumbled Words Game</h1>
        <div id="word"></div>
        <input type="text" id="input" placeholder="Enter your answer">
        <button id="check-btn">Check</button>
        <p id="result"></p>
        <button id="next-btn">Next Word</button>
    </div>

    <script src="jumble.js"></script>
</body>
</html>