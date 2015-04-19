<?php
   //создаем имя файлу
   $name = '../constructor/crop/'.$_POST['savedis1'].'.jpg';
  //записываем, не забывая перекодировать из base64
 file_put_contents($name, base64_decode($_POST['data'] ));
  // запомнить имя сохраняемого файла
 $file = $name;	 
    // заставляем браузер показать окно сохранения файла
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename=' . basename($file));
    header('Content-Transfer-Encoding: binary');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    // читаем файл и отправляем его пользователю
    readfile($file);
?>
  