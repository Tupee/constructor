<?php 
   $name = '../constructor/crop/'.$_POST['name'].'.jpg';
  
 $wq = file_put_contents($name, base64_decode($_POST['data'] ));
if($wq)echo 'ok';else echo'false';
 ?>