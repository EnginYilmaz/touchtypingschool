<?php

include_once 'veritabanibaglantisi.php';

$q=$_GET["q"];

$veritabani=veritabani_baglan();

$sorgu= mysql_query("SELECT `numpad_ders_no`, `klavye_turu` FROM `kk` WHERE `ad` = '".$q."'");

$sonuc = mysql_fetch_array($sorgu);

echo "ders=\"".$sonuc[numpad_ders_no]."\";klavye_turu=\"".$sonuc[klavye_turu]."\";";
//echo mysql_result($sonuc,0);
mysql_close($veritabani);
?>