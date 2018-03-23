<?php
session_start();
if (!isset($_SESSION['giris-onaylandi'])
    || $_SESSION['giris-onaylandi'] !== true) {
    header('Location: index.php');
    exit;
}
?>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<script>
            function fareaksiyon(nesne,resim){
                    nesne.src="grafikler/"+resim;
            }
	</script>
</head>
<body bgcolor="#CCCCCC">
<table height="100%" width="100%"><tr><td align="center" valign="middle">
<table border="1" bgcolor="#FFFFFF">
<tr>
<td>
<?php echo "<a href=\"klavye_oku.php?q=".$_SESSION['ad']."\">";?>
<img name="ayarlar" border="0" src="grafikler/ayarlar-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'ayarlar-fu.jpg');" onClick="javascript:fareaksiyon(this,'ayarlar-b.jpg');" onMouseOut="javascript:fareaksiyon(this,'ayarlar-bd.jpg');"></a>&nbsp;&nbsp;
<a href="yardim.php"><img name="yardim" border="0" src="grafikler/yardim-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'yardim-fu.jpg');" onClick="javascript:fareaksiyon(this,'yardim-b.jpg');" onMouseOut="javascript:fareaksiyon(this,'yardim-bd.jpg');"></a>&nbsp;&nbsp;
<a href="#"><img name="haftaniniyileri" border="0" src="grafikler/haftaniniyileri-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'haftaniniyileri-fu.jpg');" onClick="javascript:fareaksiyon(this,'haftaniniyileri-b.jpg');" onMouseOut="javascript:fareaksiyon(this,'haftaniniyileri-bd.jpg');"></a>&nbsp;&nbsp;
<a href="onparmak.php" onClick="klavye_sahneye();"><img name="antreman" border="0" src="grafikler/antreman-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'antreman-fu.jpg');" onClick="javascript:fareaksiyon(this,'antreman-b.jpg');" onMouseOut="javascript:fareaksiyon(this,'antreman-bd.jpg');"></a>&nbsp;&nbsp;
<a href="../numpad/onparmak.php?geri=tr_q"><img name="antreman" border="0" src="grafikler/numpadantreman-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'numpadantreman-fu.jpg');" onMouseOut="javascript:fareaksiyon(this,'numpadantreman-bd.jpg');" onClick="javascript:fareaksiyon(this,'numpadantreman-b.jpg');"></a>
</td></tr>
<tr><td>
<?php
$doc = new DOMDocument();
$doc->load( 'rekor.xml' );


$kayitlar = $doc->getElementsByTagName( "kayit" );
//foreach( $kayitlar as $kayit )

$len= sizeof($kayitlar);

$html_duz= array();

$html_duz[]="</table>";
foreach ( $kayitlar as $kayit) {
    $isimler = $kayit->getElementsByTagName( "isim" );
    $isim = $isimler->item(0)->nodeValue;

    $tarihler = $kayit->getElementsByTagName( "tarih" );
    $tarih = $tarihler->item(0)->nodeValue;

    $fisler = $kayit->getElementsByTagName( "fis" );
    $fis = $fisler->item(0)->nodeValue;

    $dogruluklar = $kayit->getElementsByTagName( "dogruluk" );
    $dogruluk = $dogruluklar->item(0)->nodeValue;

    $hizliliklar = $kayit->getElementsByTagName( "hizlilik" );
    $hizlilik = $hizliliklar->item(0)->nodeValue;
    $html_duz[] ="<tr><td>$isim</td><td>$tarih</td><td>$fis</td><td>$dogruluk</td><td>$hizlilik</td></tr>";
}
$html_duz[] ="<tr><th>İsim</th><th>Tarih</th><th>Fiş No</th><th>Doğrluk</th><th>Hızlılık</th></tr>";
$html_duz[] ="<table border=1 align=\"center\">";

$html=array_reverse($html_duz);
foreach ($html as $html_satir)echo $html_satir;
?>
</td></tr></table>
</td></tr></table>
        <div style="visibility:hidden;">
        <img src="../grafikler/entera2.jpg">
        <img src="../grafikler/enterb2.jpg">
        <img src="grafikler/ayarlar-bd.jpg">
        <img src="grafikler/ayarlar-b.jpg">
        <img src="grafikler/ayarlar-fu.jpg">
        <img src="grafikler/yardim-bd.jpg">
        <img src="grafikler/yardim-b.jpg">
        <img src="grafikler/yardim-fu.jpg">
        <img src="grafikler/haftaniniyileri-bd.jpg">
        <img src="grafikler/haftaniniyileri-b.jpg">
        <img src="grafikler/haftaniniyileri-fu.jpg">
        <img src="grafikler/antreman-bd.jpg">
        <img src="grafikler/antreman-b.jpg">
        <img src="grafikler/antreman-fu.jpg">
        <img src="grafikler/numpadantreman-fu.jpg">
        <img src="grafikler/numpadantreman-bd.jpg">
        <img src="grafikler/numpadantreman-b.jpg">
        </div>
<body>
<html>