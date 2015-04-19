<?php   $db = mysql_connect ("localhost","olegh176_sky","sky12345");
  mysql_select_db("olegh176_skygolos",$db);
  if(!$db)
die('ERROR of connect to database.'); ?>

<?php
if(isset($_GET['name'])){
$name= $_GET['name'];

$sql = 'SELECT * FROM gallery_products where name_image LIKE \''.$name.'%\' LIMIT 1';
$res= mysql_query($sql) or die(mysql_error());
while ($row = mysql_fetch_assoc($res)) {
    echo $row['name_image'];
}
} else { 
echo 'Error';
}
?>