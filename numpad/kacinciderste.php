<?php

include_once 'veritabanibaglantisi.php';

$q=$_GET["q"];

$veritabani=veritabani_baglan();

$sorgu= mysql_query("SELECT `ders_no` FROM `kk` WHERE `ad` = '".$q."'");

$sonuc = mysql_fetch_array($sorgu);

echo $sonuc[ders_no];
//echo mysql_result($sonuc,0);

mysql_close($veritabani);
?>