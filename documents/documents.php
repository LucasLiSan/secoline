<!--
Adapted code from "Developer Profile Card using HTML and CSS - Coding Torque" (https://codingtorque.com/developer-profile-card-using-html-and-css/)
and "Glassmorphic Dashboard using HTML, CSS and JavaScript - Coding Torque". (https://codingtorque.com/glassmorphic-dashboard-using-html-css-and-javascript/)
Written by: 
 - Coding Torque - https://www.instagram.com/codingtorque/
 - Piyush Patil - https://twitter.com/PiyushPatil1243
 - @TurkAysenur - https://codepen.io/TurkAysenur (https://codepen.io/TurkAysenur/pen/ZEpxeYm)
 - @code.scientist  - https://www.instagram.com/code.scientist/
 - @codingknights - https://www.instagram.com/codingknights/
 - @Taluska - https://codepen.io/Taluska (https://codepen.io/Taluska/pen/ZExJabE?editors=0010)
 - @ratul16 - https://codepen.io/ratul16 (https://codepen.io/ratul16/pen/XWBBrxN?editors=1100)
-->

<!DOCTYPE html>
    <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="_assets/_css/documents.css">
            <title>Prontuário Digital - Documentos</title>
        </head>
        <?php
            $servername = "localhost";
            $username = "root";
            $password = "";

            // Create connection
            $conn = new mysqli($servername, $username, $password, 'pgdatabase');

            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
            echo "Connected successfully";

            $rm = htmlspecialchars($_GET['rm']);
            $dados = "SELECT nome, ra, ra_dg, turma, periodo FROM alunos WHERE rm='$rm'";
            $result = $conn->query($dados);
        ?>
        <body>
            <div class="video-bg">
                <video width="320" height="240" autoplay loop muted>
                    <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="user_img">
                <img src="../db_imgs/_profile.pictures/profilePic.<?php echo $rm ?>.jpg" height="100" width="100" alt="profile">
            </div>
            <div class="user_details">
                <h5>DOCUMENTOS DO ALUNO</h5>
                <?php
                    while ($row = mysqli_fetch_assoc($result)) {
                        echo "<span>".$row['nome']."</span>";
                        echo "<span>"."R.A.: ".$row['ra']."-".$row['ra_dg']."</span>";
                        echo "<p>".$row['turma']." ".$row['periodo']."</p>";
                    }
                ?>
                <a href="../index/index.php<?php echo "?rm=".$rm ?>">INÍCIO</a>
                <hr>
            </div>
            <article class="tabs content--flow">
                <aside class="sidebar">
                    <nav role="tablist" class="tab__navigation">
                        <button role="tab" aria-selected="true" class="tab__button" id="1">
                            <span class="icon__for--tab">
                            <i class="fas fa-pencil-alt"></i>
                            </span>
                            <span class="text__for--tab">Matrícula</span>
                        </button>
                        <button role="tab" aria-selected="false" class="tab__button" id="2">
                            <span class="icon__for--tab">
                            <i class="fas fa-clipboard-check"></i>
                            </span>
                            <span class="text__for--tab">Autorizações</span>
                        </button>
                        <button role="tab" aria-selected="false" class="tab__button" id="3">
                            <span class="icon__for--tab">
                            <i class="fas fa-plus-square"></i>
                            </span>
                            <span class="text__for--tab">Atestados</span>
                        </button>
                        <button role="tab" aria-selected="false" class="tab__button" id="4">
                            <span class="icon__for--tab">
                            <i class="fas fa-clipboard"></i>
                            </span>
                            <span class="text__for--tab">Laudos</span>
                        </button>
                        <button role="tab" aria-selected="false" class="tab__button" id="5">
                            <span class="icon__for--tab">
                            <i class="fas fa-tag"></i>
                            </span>
                            <span class="text__for--tab">Outros</span>
                        </button>
                    </nav>
                </aside>
                <main class="content__area">
                    <div class="tab__content">
                        <div role="tabpanel" aria-labelledby="1">
                            <div class="container">
                                <div class="gallery">
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.CertidNasc.Frente.jpg" alt="Certidão de nascimento">
                                        <div class="info">
                                            <h4 class="title">Certidão de Nascimento, Bento</h4>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.ComprovanteResid.Frente.jpg" alt="Comprovante de residência">
                                        <div class="info">
                                            <h4 class="title">Comprovante de residência, Bento</h4>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.CarteiraVac.Frente.jpeg" alt="Carteira de vacinação">
                                        <div class="info">
                                            <h4 class="title">Carteira de vacinação, Bento</h4>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.DocResp.RG-CPF.Pai.Frente.jpg" alt="Documento do responsável">
                                        <div class="info">
                                            <h4 class="title">Documento do responsável, Bento</h4>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.SUS.Frente.jpg" alt="Cartão do SUS">
                                        <div class="info">
                                            <h4 class="title">Cartão do SUS, Bento</h4>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.DecTransf.PG.01-01-2023.Frente.png" alt="Declaração de transferência">
                                        <div class="info">
                                            <h4 class="title">Declaração de transferência, Bento</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" aria-labelledby="2" hidden>
                            <div class="container">
                                <div class="gallery">
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.CertidNasc.Frente.jpg" alt="Certidão de nascimento">
                                        <div class="info">
                                            <h4 class="title">Certidão de Nascimento, Bento</h4>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.ComprovanteResid.Frente.jpg" alt="Comprovante de residência">
                                        <div class="info">
                                            <h4 class="title">Comprovante de residência, Bento</h4>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.CarteiraVac.Frente.jpeg" alt="Carteira de vacinação">
                                        <div class="info">
                                            <h4 class="title">Carteira de vacinação, Bento</h4>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.DocResp.RG-CPF.Pai.Frente.jpg" alt="Documento do responsável">
                                        <div class="info">
                                            <h4 class="title">Documento do responsável, Bento</h4>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.SUS.Frente.jpg" alt="Cartão do SUS">
                                        <div class="info">
                                            <h4 class="title">Cartão do SUS, Bento</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" aria-labelledby="3" hidden>
                            <div class="container">
                                <div class="gallery">
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.CertidNasc.Frente.jpg" alt="Certidão de nascimento">
                                        <div class="info">
                                            <h4 class="title">Certidão de Nascimento, Bento</h4>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.ComprovanteResid.Frente.jpg" alt="Comprovante de residência">
                                        <div class="info">
                                            <h4 class="title">Comprovante de residência, Bento</h4>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.CarteiraVac.Frente.jpeg" alt="Carteira de vacinação">
                                        <div class="info">
                                            <h4 class="title">Carteira de vacinação, Bento</h4>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.DocResp.RG-CPF.Pai.Frente.jpg" alt="Documento do responsável">
                                        <div class="info">
                                            <h4 class="title">Documento do responsável, Bento</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" aria-labelledby="4" hidden>
                            <div class="container">
                                <div class="gallery">
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.CertidNasc.Frente.jpg" alt="Certidão de nascimento">
                                        <div class="info">
                                            <h4 class="title">Certidão de Nascimento, Bento</h4>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.ComprovanteResid.Frente.jpg" alt="Comprovante de residência">
                                        <div class="info">
                                            <h4 class="title">Comprovante de residência, Bento</h4>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.CarteiraVac.Frente.jpeg" alt="Carteira de vacinação">
                                        <div class="info">
                                            <h4 class="title">Carteira de vacinação, Bento</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" aria-labelledby="5" hidden>
                            <div class="container">
                                <div class="gallery">
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.CertidNasc.Frente.jpg" alt="Certidão de nascimento">
                                        <div class="info">
                                            <h4 class="title">Certidão de Nascimento, Bento</h4>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="myImg" src="../db_imgs/_matric.pictures/1234.ComprovanteResid.Frente.jpg" alt="Comprovante de residência">
                                        <div class="info">
                                            <h4 class="title">Comprovante de residência, Bento</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </article>
            <div id="myModal" class="modal">
                <span class="close">&times;</span>
                <img class="modal-content" id="img01">
                <div id="caption"></div>
            </div>
            <script src="_assets/_js/docs.js" defer></script>
            <footer></footer>
        </body>
    </html>