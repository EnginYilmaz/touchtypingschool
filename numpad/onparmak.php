<?php
session_start();
if (!isset($_SESSION['giris-onaylandi'])
    || $_SESSION['giris-onaylandi'] !== true) {
    header('Location: index.php');
    exit;
}
$klavye_lang= $_GET["q"];
$klavye_pad= $_GET["klavye_pad"];
if ( $klavye_pad != "numpad" ) $klavye_pad = $klavye_lang;
//print $klavye_lang;
?>
<html>
    <head>
    <link rel="stylesheet" type="text/css" href="grafikler/klavye.css"/>


    <script src="ders_bilgisi_oku.js"></script>
    <script src="diller/ders/d_<?=$klavye_pad?>.js"/>
    <script src="ders_bilgisi_yaz.js"></script>
    <script src="diller/sahne/s_<?=$klavye_pad?>.js"/></script>
    <script src="diller/lib_dil/l_<?=$klavye_pad?>.js"/></script>
    <script src="onparmak.js"></script>
    <script src="rekor-yaz.js"></script>

    <script>
    var kullanici_adi="<?=$_SESSION['ad']?>";

    function klavye_sahneye() {
        sunucudan_oku(kullanici_adi); //alert(kullanici_adi);
    }
    function fareaksiyon(nesne,resim){
            nesne.src="grafikler/menu-dugmeleri/"+resim;
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
					<?php echo "<a href=\"klavye_oku.php?q=".$klavye_lang."\">";?>
                    <img name="ayarlar" border="0" src="grafikler/menu-dugmeleri/ayarlar-bd-<?=$klavye_lang?>.jpg" onMouseOver="javascript:fareaksiyon(this,'ayarlar-fu-<?=$klavye_lang?>.jpg');" onClick="javascript:fareaksiyon(this,'ayarlar-b-<?=$klavye_lang?>.jpg');" onMouseOut="javascript:fareaksiyon(this,'ayarlar-bd-<?=$klavye_lang?>.jpg');"></a>&nbsp;&nbsp;

                    <a href="yardim.php"><img name="yardim" border="0" src="grafikler/menu-dugmeleri/yardim-bd-<?=$klavye_lang?>.jpg" onMouseOver="javascript:fareaksiyon(this,'yardim-fu-<?=$klavye_lang?>.jpg');" onClick="javascript:fareaksiyon(this,'yardim-b-<?=$klavye_lang?>.jpg');" onMouseOut="javascript:fareaksiyon(this,'yardim-bd-<?=$klavye_lang?>.jpg');"></a>&nbsp;&nbsp;
                    <a href="rekor-oku.php"><img name="haftaniniyileri" border="0" src="grafikler/menu-dugmeleri/haftaniniyileri-bd-<?=$klavye_lang?>.jpg" onMouseOver="javascript:fareaksiyon(this,'haftaniniyileri-fu-<?=$klavye_lang?>.jpg');" onClick="javascript:fareaksiyon(this,'haftaniniyileri-b-<?=$klavye_lang?>.jpg');" onMouseOut="javascript:fareaksiyon(this,'haftaniniyileri-bd-<?=$klavye_lang?>.jpg');"></a>&nbsp;&nbsp;
                    <a href="onparmak.php?q=<?=$klavye_lang?>"><img name="antreman" border="0" src="grafikler/menu-dugmeleri/antreman-bd-<?=$klavye_lang?>.jpg" onMouseOver="javascript:fareaksiyon(this,'antreman-fu-<?=$klavye_lang?>.jpg');" onClick="javascript:fareaksiyon(this,'antreman-b-<?=$klavye_lang?>.jpg');" onMouseOut="javascript:fareaksiyon(this,'antreman-bd-<?=$klavye_lang?>.jpg');"></a>&nbsp;&nbsp;
                    <a href="onparmak.php?q=<?=$klavye_lang?>&klavye_pad=numpad"><img name="antreman" border="0" src="grafikler/menu-dugmeleri/numpadantreman-bd-<?=$klavye_lang?>.jpg" onMouseOver="javascript:fareaksiyon(this,'numpadantreman-fu-<?=$klavye_lang?>.jpg');" onMouseOut="javascript:fareaksiyon(this,'numpadantreman-bd-<?=$klavye_lang?>.jpg');" onClick="javascript:fareaksiyon(this,'numpadantreman-b-<?=$klavye_lang?>.jpg');"></a>
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
        <img src="grafikler/menu-dugmeleri/ayarlar-bd-<?=$klavye_lang?>.jpg">
        <img src="grafikler/menu-dugmeleri/ayarlar-b-<?=$klavye_lang?>.jpg">
        <img src="grafikler/menu-dugmeleri/ayarlar-fu-<?=$klavye_lang?>.jpg">
        <img src="grafikler/menu-dugmeleri/yardim-bd-<?=$klavye_lang?>.jpg">
        <img src="grafikler/menu-dugmeleri/yardim-b-<?=$klavye_lang?>.jpg">
        <img src="grafikler/menu-dugmeleri/yardim-fu-<?=$klavye_lang?>.jpg">
        <img src="grafikler/menu-dugmeleri/haftaniniyileri-bd-<?=$klavye_lang?>.jpg">
        <img src="grafikler/menu-dugmeleri/haftaniniyileri-b-<?=$klavye_lang?>.jpg">
        <img src="grafikler/menu-dugmeleri/haftaniniyileri-fu-<?=$klavye_lang?>.jpg">
        <img src="grafikler/menu-dugmeleri/antreman-bd-<?=$klavye_lang?>.jpg">
        <img src="grafikler/menu-dugmeleri/antreman-b-<?=$klavye_lang?>.jpg">
        <img src="grafikler/menu-dugmeleri/antreman-fu-<?=$klavye_lang?>.jpg">
        <img src="grafikler/menu-dugmeleri/numpadantreman-fu-<?=$klavye_lang?>.jpg">
        <img src="grafikler/menu-dugmeleri/numpadantreman-bd-<?=$klavye_lang?>.jpg">
        <img src="grafikler/menu-dugmeleri/numpadantreman-b-<?=$klavye_lang?>.jpg">
        <img src="grafikler/sag_serce_sari.jpg">
        <img src="grafikler/sag_yuzuk_sari.jpg">
        <img src="grafikler/sag_orta_sari.jpg">
        <img src="grafikler/sag_isaret_sari.jpg">
        <img src="grafikler/sol_orta_sari.jpg">
        <img src="grafikler/sol_yuzuk_sari.jpg">
        <img src="grafikler/sol_serce_sari.jpg">
        <img src="grafikler/sag_serce_yesil.jpg">
        <img src="grafikler/sol_serce_yesil.jpg">
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
