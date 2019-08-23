<html>
<head>
    <title>Enviando arquivos com PHP</title>
</head>
<body>
    <?php 
    if(isset($_POST["enviar-form"])){
        $tiposPermitidos = array("docx");
        $extensao = pathinfo($_FILES["arquivo"]["name"], PATHINFO_EXTENSION);

        if(in_array($extensao, $tiposPermitidos)){
            $pasta = "C:\\xampp\\";/*Colocar o diretório */
            $temporario = $_FILES["arquivo"]["tmp_name"];
            $novoNome = uniqid().".$extensao";

            if(move_uploaded_file($temporario, $pasta.$novoNome)){
                $mensagem = "Upload feito com sucesso";
            }else{
                $mensagem = "Erro, não foi possível fazer o upload";
            }


        }else{
            $mensagem = "Formato não permitido";
        }

        echo $mensagem;
    }

    if(isset($_POST["enviar-form-mult"])){

        $tiposPermitidos = array("docx");
        $quantidadeArquivos = count($_FILES["arquivo"]["name"]);
        $contador = 0;

        while ($contador < $quantidadeArquivos) {


            $extensao = pathinfo($_FILES["arquivo"]["name"][$contador], PATHINFO_EXTENSION);

            if(in_array($extensao, $tiposPermitidos)){
                $pasta = "C:\\xampp\\";/*Colocar o diretório */
                $temporario = $_FILES["arquivo"]["tmp_name"][$contador];
                $novoNome = uniqid().".$extensao";

                if(move_uploaded_file($temporario, $pasta.$novoNome)){
                    echo "Upload feito com sucesso para $pasta$novoNome<br>";
                }else{
                    echo "Erro ao enviar o arquivo $temporario";
                }


            }else{
                echo "$extensao não é permitida<br>";
            }
            $contador++;            
        }

    }

    ?>
    
    <h1>Upload de um arquivo</h1>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="multipart/form-data">       
     <input name="arquivo" type="file">
     <input type="submit" name="enviar-form" value="Enviar Arquivo">
 </form>
 <hr>

 <h1>Upload de multiplos arquivos</h1>
 <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="multipart/form-data">       
     <input name="arquivo[]" type="file" multiple>
     <input type="submit" name="enviar-form-mult" value="Enviar Arquivo">
 </form>


</body>
</html>