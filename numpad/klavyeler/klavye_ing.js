function ing_klavye_bas() {
//document.write(
var klavye_ar = new Array (
   "<form name=\"klavye\">",
        "<table class=\"klavye\" border=\"0\">",
            "<tr>",
                "<td colspan=\"2\" width=\"500\">",
                    "<input type=\"button\" name=\"Esc\" value=\"esc\" class=\"standart\"/>&nbsp;&nbsp;&nbsp;&nbsp;",
                    "<input type=\"button\" name=\"F1\" value=\"F1\" class=\"F\"/>",
                    "<input type=\"button\" name=\"F2\" value=\"F2\" class=\"F\"/>",
                    "<input type=\"button\" name=\"F3\" value=\"F3\" class=\"F\"/>",
                    "<input type=\"button\" name=\"F4\" value=\"F4\" class=\"F\"/>&nbsp;&nbsp;&nbsp;&nbsp;",
                    "<input type=\"button\" name=\"F5\" value=\"F5\" class=\"F\"/>",
                    "<input type=\"button\" name=\"F6\" value=\"F6\" class=\"F\"/>",
                    "<input type=\"button\" name=\"F7\" value=\"F7\" class=\"F\"/>",
                    "<input type=\"button\" name=\"F8\" value=\"F8\" class=\"F\"/>&nbsp;&nbsp;&nbsp;&nbsp;",
                    "<input type=\"button\" name=\"F9\" value=\"F9\" class=\"F\"/>",
                    "<input type=\"button\" name=\"F10\" value=\"F10\" class=\"F\"/>",
                    "<input type=\"button\" name=\"F11\" value=\"F11\" class=\"F\"/>",
                    "<input type=\"button\" name=\"F12\" value=\"F12\" class=\"F\"/>",
                "</td>",
                "<td bgcolor=\"white\" valign=\"bottom\"><font color=\"blue\">Ders</font></td>",
                "<td bgcolor=\"white\"  valign=\"top\"><font color=\"red\">Doğruluk</font></td><td  valign=\"top\" bgcolor=\"red\"><input type=\"edit\" name=\"dogruluk_yuzdesi\" value=\"0\"/></td>",
            "</tr>",
            "<tr>",
                "<td colspan=\"2\">",
                    "<input type=\"button\" name=\"ciftirnak\" value=\"&#34;\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"bir\" value=\"1\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"iki\" value=\"2\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"uc\" value=\"3\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"dort\" value=\"4\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"bes\" value=\"5\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"alti\" value=\"6\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"yedi\" value=\"7\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"sekiz\" value=\"8\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"dokuz\" value=\"9\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"sifir\" value=\"0\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"yildiz\" value=\"*\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"eksi\" value=\"-\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"backspace\" value=\"<--\" class=\"backspace\"/>",
                "</td>",
                "<td valign=\"top\" bgcolor=\"blue\">",
                    "<div id=\"dersler\">",
                    "</td>",
                "<td bgcolor=\"white\" valign=\"top\"><font color=\"green\">Hız</font></td><td bgcolor=\"green\" valign=\"top\"><input type=\"edit\" name=\"hizlilik\" size=\"6\" value=\"0\"/></td>",
            "</tr>",
            "<tr>",
                "<td>",
                    "<input type=\"button\" name=\"tab\" value=\"<-|->\" class=\"sekme\"/>",
                    "<input type=\"button\" name=\"Q\" value=\"Q\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"W\" value=\"W\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"E\" value=\"E\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"R\" value=\"R\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"T\" value=\"T\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"Y\" value=\"Y\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"U\" value=\"U\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"I\" value=\"I\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"O\" value=\"O\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"P\" value=\"P\" class=\"standart\"/>",
                "</td>",
                "<td rowspan=\"2\">",
                    "<input type=\"button\" name=\"giris\" value=\"<-|\" class=\"giris\"/>",
               "</td>",
               "<td bgcolor=\"white\" rowspan=\"4\" colspan=\"3\" valign=\"top\" colspan=\"5\">&nbsp;</td>",
//                   "<input type=\"button\" onclick=\"sunucuya_sonuc_yaz('1');\" value=\"sıfırla\"/>",
//                   "<input type=\"button\" onclick=\"sunucudan_okuma_istegi();\" value=\"al\"/></td>",
            "</tr>",
            "<tr>",
                "<td>",
                    "<input type=\"button\" name=\"caps_lock\" value=\"Caps Lock\" class=\"capslock\"/>",
                    "<input type=\"button\" name=\"A\" value=\"A\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"S\" value=\"S\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"D\" value=\"D\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"F\" value=\"F _\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"G\" value=\"G\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"H\" value=\"H\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"J\" value=\"_ J\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"K\" value=\"K\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"L\" value=\"L\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"virgul\" value=\",\" class=\"standart\"/>",
               "</td>",
            "</tr>",
            "<tr>",
                "<td colspan=\"2\">",
                    "<input type=\"button\" name=\"sol_shift\" value=\"Shift\" class=\"sol_shift\"/>",
                    "<input type=\"button\" name=\"kucuktur\" value=\"<\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"Z\" value=\"Z\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"X\" value=\"X\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"C\" value=\"C\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"V\" value=\"V\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"B\" value=\"B\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"N\" value=\"N\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"M\" value=\"M\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"nokta\" value=\".\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"sag_shift\" value=\"Shift\" class=\"sag_shift\"/>",
               "</td>",
            "</tr>",
            "<tr>",
                "<td colspan=\"2\">",
                    "<input type=\"button\" name=\"sol_ctrl\" value=\"Ctrl\" class=\"kontrol\"/>",
                    "<input type=\"button\" name=\"sol_start\" value=\"Start\" class=\"kontrol\"/>",
                    "<input type=\"button\" name=\"alt\" value=\"Alt\" class=\"kontrol\"/>",
                    "<input type=\"button\" name=\"bosluk\" value=\" \" class=\"space\"/>",
                    "<input type=\"button\" name=\"altgr\" value=\"Alt Gr\" class=\"kontrol\"/>",
                    "<input type=\"button\" name=\"sag_start\" value=\"V\" class=\"kontrol\"/>",
                    "<input type=\"button\" name=\"sag_tus\" value=\"m\" class=\"kontrol\"/>",
                    "<input type=\"button\" name=\"sag_ctrl\" value=\"Ctrl\" class=\"kontrol\"/>",
                "</td>",
            "</tr>",
        "</table>",
        "<table  border=\"0\" cellpadding=\"0\" cellspacing=\"0\">",
            "<tr>",
                "<td rowspan=\"2\"><img name=\"sol_serce\" src=\"http://www.kalemkutu.com/onparmak/grafikler/sol_serce.jpg\"/></td>",
                "<td rowspan=\"2\"><img name=\"sol_yuzuk\" src=\"http://www.kalemkutu.com/onparmak/grafikler/sol_yuzuk.jpg\"/></td>",
                "<td rowspan=\"2\"><img name=\"sol_orta\" src=\"http://www.kalemkutu.com/onparmak/grafikler/sol_orta.jpg\"/></td>",
                "<td rowspan=\"2\"><img name=\"sol_isaret\" src=\"http://www.kalemkutu.com/onparmak/grafikler/sol_isaret.jpg\"/></td>",
                "<td bgcolor=\"white\">&nbsp;</td>",
                "<td rowspan=\"2\"><img name=\"sag_isaret\" src=\"http://www.kalemkutu.com/onparmak/grafikler/sag_isaret.jpg\"/></td>",
                "<td rowspan=\"2\"><img name=\"sag_orta\" src=\"http://www.kalemkutu.com/onparmak/grafikler/sag_orta.jpg\"/></td>",
                "<td rowspan=\"2\"><img name=\"sag_yuzuk\" src=\"http://www.kalemkutu.com/onparmak/grafikler/sag_yuzuk.jpg\"/></td>",
                "<td rowspan=\"2\"><img name=\"sag_serce\" src=\"http://www.kalemkutu.com/onparmak/grafikler/sag_serce.jpg\"/></td>",
            "</tr>",
            "<tr>",
                "<td valign=\"bottom\"><img name=\"basparmaklar\" src=\"http://www.kalemkutu.com/onparmak/grafikler/basparmaklar.jpg\"/></td>",
            "</tr>",
        "</table>",
        "<table>",
            "<tr>",
                 "<td><input type=\"edit\" name=\"okumafisi\" class=\"disabled fis\" disabled=\"disabled\"/></td>",
                 "<td><div id=\"satirsonu\">&nbsp;</div></td>",
            "</tr>",
            "<tr>",
                 "<td colspan=\"2\"><input type=\"edit\" name=\"yazmafisi\" class=\"disabled fis\" disabled=\"disabled\" onkeypress=\"return yenitus(event)\"/></td>",
            "</tr>",
        "</table>",
    "</form>"
    );
    var klavye_tekst=klavye_ar.join("");
    return klavye_tekst;
}