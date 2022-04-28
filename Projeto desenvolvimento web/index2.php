<html>
    <head>
        <title>Meu Primeiro Site em PHP! WOHOOOOOO</title>

        <script src=src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        
        <style type="text/css">
            .linha{
                font-weight: bold;
                color: green;
                padding-left: 10px;
                line-height: 50px;
            }
        </style>
    </head>
    <body>
            <?php
                for ( $i = 0 ; $i <10 ; $i++){
                    print (" <span calss=\"linha\"> Linha Número " . $i . "</span><br />");

                }
            ?>
    </body>
    <script type="text/javascript">
        $(document) .ready(function (){
                alert("WOOHOOO") ;
        });
    </script>


</html>