<?php
session_start();
if (!isset($_SESSION['giris-onaylandi'])
    || $_SESSION['giris-onaylandi'] !== true) {
    header('Location: index.php');
    exit;
}
?>
<html>
    <link rel="stylesheet" type="text/css" href="../grafik-demo/klavye.css"/>
    <script src="ders.js"></script>
    <script src="ders_bilgisi_oku.js"></script>
    <script src="ders_bilgisi_yaz.js"></script>
    <script src="sahne.js"></script>
    <script src="onparmak.js"></script>
    <script src="rekor-yaz.js"></script>
    <script>
    var kullanici_adi="<?=$_SESSION['ad']?>";

    function klavye_sahneye() {
        sunucudan_oku(kullanici_adi); //alert(kullanici_adi);
    }
    function fareaksiyon(nesne,resim){
            nesne.src="grafikler/"+resim;
    }
    </script>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
    </head>
    <body bgcolor="#CCCCCC" onLoad="klavye_sahneye();" style="overflow: hidden">
        <table height="100%" width="100%"><tr><td align="center" valign="middle">
        <table border="1">
            <tr>
                <td class="menulistesi" bgcolor="#FFFFFF">
					<?php echo "<a href=\"klavye_oku.php?q=".$_SESSION['ad']."\">";?>
                    <img name="ayarlar" border="0" src="grafikler/ayarlar-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'ayarlar-fu.jpg');" onClick="javascript:fareaksiyon(this,'ayarlar-b.jpg');" onMouseOut="javascript:fareaksiyon(this,'ayarlar-bd.jpg');"></a>&nbsp;&nbsp;

                    <a href="yardim.php"><img name="yardim" border="0" src="grafikler/yardim-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'yardim-fu.jpg');" onClick="javascript:fareaksiyon(this,'yardim-b.jpg');" onMouseOut="javascript:fareaksiyon(this,'yardim-bd.jpg');"></a>&nbsp;&nbsp;
                    <a href="rekor-oku.php"><img name="haftaniniyileri" border="0" src="grafikler/haftaniniyileri-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'haftaniniyileri-fu.jpg');" onClick="javascript:fareaksiyon(this,'haftaniniyileri-b.jpg');" onMouseOut="javascript:fareaksiyon(this,'haftaniniyileri-bd.jpg');"></a>&nbsp;&nbsp;
                    <a href="onparmak.php"><img name="antreman" border="0" src="grafikler/antreman-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'antreman-fu.jpg');" onClick="javascript:fareaksiyon(this,'antreman-b.jpg');" onMouseOut="javascript:fareaksiyon(this,'antreman-bd.jpg');"></a>&nbsp;&nbsp;
                    <a href="../numpad/onparmak.php?geri=tr_q"><img name="antreman" border="0" src="grafikler/numpadantreman-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'numpadantreman-fu.jpg');" onMouseOut="javascript:fareaksiyon(this,'numpadantreman-bd.jpg');" onClick="javascript:fareaksiyon(this,'numpadantreman-b.jpg');"></a>
                </td>
            </tr>
            <tr>
                <td colspan="4" bgcolor="#FFFFFF">
                    <div id="sahne">&nbsp;</div>
                </td>
            </tr>
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
        <img src="../grafikler/sag_serce_sari.jpg">
        <img src="../grafikler/sag_yuzuk_sari.jpg">
        <img src="../grafikler/sag_orta_sari.jpg">
        <img src="../grafikler/sag_isaret_sari.jpg">
        <img src="../grafikler/sol_orta_sari.jpg">
        <img src="../grafikler/sol_yuzuk_sari.jpg">
        <img src="../grafikler/sol_serce_sari.jpg">
        <img src="../grafikler/sag_serce_yesil.jpg">
        <img src="../grafikler/sol_serce_yesil.jpg">
        </div>
        <script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-13255111-1");
pageTracker._trackPageview();
} catch(err) {}</script>
    </body>
</html>
