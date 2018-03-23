<?php
session_start();
if (!isset($_SESSION['giris-onaylandi'])
    || $_SESSION['giris-onaylandi'] !== true) {
    header('Location: ../index.php');
    exit;
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
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
<table border="1" bgcolor="#FFFFFF" width="50%"><tr>
<td>
<?php echo "<a href=\"klavye_oku.php?q=".$_SESSION['ad']."\">";?>
<img name="ayarlar" border="0" src="grafikler/ayarlar-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'ayarlar-fu.jpg');" onClick="javascript:fareaksiyon(this,'ayarlar-b.jpg');" onMouseOut="javascript:fareaksiyon(this,'ayarlar-bd.jpg');"></a>&nbsp;&nbsp;
<a href="yardim.php"><img name="yardim" border="0" src="grafikler/yardim-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'yardim-fu.jpg');" onClick="javascript:fareaksiyon(this,'yardim-b.jpg');" onMouseOut="javascript:fareaksiyon(this,'yardim-bd.jpg');"></a>&nbsp;&nbsp;
<a href="rekor-oku.php"><img name="haftaniniyileri" border="0" src="grafikler/haftaniniyileri-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'haftaniniyileri-fu.jpg');" onClick="javascript:fareaksiyon(this,'haftaniniyileri-b.jpg');" onMouseOut="javascript:fareaksiyon(this,'haftaniniyileri-bd.jpg');"></a>&nbsp;&nbsp;
<a href="onparmak.php"><img name="antreman" border="0" src="grafikler/antreman-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'antreman-fu.jpg');" onClick="javascript:fareaksiyon(this,'antreman-b.jpg');" onMouseOut="javascript:fareaksiyon(this,'antreman-bd.jpg');"></a>&nbsp;&nbsp;
<a href="../numpad/onparmak.php?geri=tr_q"><img name="antreman" border="0" src="grafikler/numpadantreman-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'numpadantreman-fu.jpg');" onMouseOut="javascript:fareaksiyon(this,'numpadantreman-bd.jpg');" onClick="javascript:fareaksiyon(this,'numpadantreman-b.jpg');"></a>
</td></tr>
<tr><td  align="center">
<?php
include_once 'veritabanibaglantisi.php';
$q=$_GET["q"];
$veritabani=veritabani_baglan();
$sorgu= mysql_query("SELECT `klavye_turu` FROM `kk` WHERE `ad` = '".$q."'");
$sonuc = mysql_fetch_array($sorgu);

$diller_ar = array ("tr_f" => " Türkçe F", "tr_q"=>"Türkçe Q","alm" => "Deutsch", "en_q" => "English", "isp"=>"Español" );

$secilimetni="";

echo "<form method=\"post\" action=\"klavye_yaz.php\">";
echo "<select name=\"secilidil\">";
foreach ( $diller_ar as $kod => $dil) {
	if ($kod== $sonuc [klavye_turu] ) $secilimetni="selected=\"selected\"";
	echo "<option value=\"".$kod."\" ".$secilimetni.">".$dil."</option>";
	$secilimetni="";
}
echo "</select>";
echo "<input type=\"submit\">";
echo "<input type=\"hidden\" value=\"".$q."\" name=\"kullanici\">";
echo "</form>";
mysql_close($veritabani);
?>
</td></tr>
</table>
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
</body>
</html>

