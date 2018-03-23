<?php
    function veritabani_baglan () {
        $sunucu = "localhost";
        $kullanici = "engyn_webstudio";
        $sifre = "X-P%{XM~=)waiJ!]{P";
        $vt_ismi = "engyn_ttss";

        $veritabani = mysql_connect($sunucu,$kullanici,$sifre)or die ("baglanmiyooooor");
        mysql_select_db($vt_ismi);
        return $veritabani;
    }
?>
