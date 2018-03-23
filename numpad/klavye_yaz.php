<?php
include_once 'veritabanibaglantisi.php';

$dil=$_POST["secilidil"];
$kullanici = $_POST["kullanici"];
$veritabani=veritabani_baglan();
mysql_query("UPDATE `kk` SET `klavye_turu` ='".$dil."' WHERE `ad`= '".$kullanici."'");
mysql_close($veritabani);

$url= "klavye_oku.php?q=".$kullanici;
 Header ("Location: ../".$dil."/".$url); 
?>