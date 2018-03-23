<?php
include_once 'veritabanibaglantisi.php';

$q=$_GET["q"];
$ders= $_GET["ders"];
$veritabani=veritabani_baglan();
mysql_query("UPDATE `kk` SET `numpad_ders_no` ='".$ders."' WHERE `ad`= '".$q."'");
echo "ders bilgisi yaz php";
mysql_close($veritabani);
?>