  <?php
var_dump($_POST);
  /* 		require 'mail/class.phpmailer.php'; 

        $mail = new PHPMailer(); 
		$mail->CharSet = "UTF-8";
        $mail->From = 'test@test.ru';      // от кого 
        $mail->FromName = 'www.php-mail.ru';   // от кого 
        $mail->AddAddress('sinnhro@gmail.com', 'я'); // кому - адрес, Имя 
        $mail->IsHTML(true);        // выставляем формат письма HTML 
        $mail->Subject = $_POST['title'];  // тема письма 

        // если был файл, то прикрепляем его к письму 
        if(isset($_FILES['attachfile'])) { 
                 if($_FILES['attachfile']['error'] == 0){ 
                    $mail->AddAttachment($_FILES['attachfile']['tmp_name'], $_FILES['attachfile']['name']); 
                 } 
        } 
        // если было изображение, то прикрепляем его в виде картинки к телу письма. 
        if(isset($_FILES['attachimage'])) { 
                 if($_FILES['attachimage']['error'] == 0){ 
                    if (!$mail->AddEmbeddedImage($_FILES['attachimage']['tmp_name'], 'my-attach', 'image.gif', 'base64', $_FILES['attachimage']['type'])) 
                         die ($mail->ErrorInfo); 
                    $mess .= 'картинка:<br /><img src="cid:my-attach" border=0><br />'; 
                 } 
        } 
        $mail->Body = $mess; 

        // отправляем наше письмо 
        if (!$mail->Send()) die ('Mailer Error: '.$mail->ErrorInfo); 
        echo 'Спасибо! Ваше письмо отправлено.'; */ ?>