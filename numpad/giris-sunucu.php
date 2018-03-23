<?php
include_once 'veritabanibaglantisi.php';
session_start();
$gelen_ad=$_POST["ad"];
$gelen_sifre= $_POST["sifre"];

$veritabani= veritabani_baglan();
$sonuc= mysql_query("SELECT `sifre`, `ad` FROM `kk` WHERE `ad` = '".$gelen_ad."'");
$sorgu = mysql_fetch_array($sonuc);

$vt_sifre= $sorgu [sifre];

if ($vt_sifre== $gelen_sifre) {
    $_SESSION['giris-onaylandi'] = true;
    $_SESSION['ad']=$gelen_ad;
    //session_register("sifre");
    header( "location:onparmak.php" );
    mysql_close($veritabani);
} else{
    /*header( "location:index.php" );
    mysql_close($veritabani);*/
	echo "baglanamadi";
}
?>