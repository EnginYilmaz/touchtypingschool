// sahne_bas resmine nasıl argüman olarak profil_resim geldiğine dikkat
function sahne_bas() {
// Tarayıcı uyumluluk testi başlar.
var strGiris1;
var strGiris2;
var strGiris3;

if (navigator.appName=="Microsoft Internet Explorer") {
	//strGiris2="<div id='giris2'><img src='grafikler/entera2.jpg'></div>";
        strGiris2="<input type=\"button\" name=\"giris2\" value=\"&#8629;\" class=\"giris2\"/>";
}else{
	strGiris2="<input type=\"button\" name=\"giris2\" value=\"&#8629;\" class=\"giris2\"/>";
}
// Tarayıcı uyumluluk testi biter.

var dil_secim_listem = dil_secim_listesi();

var klavye_ar = new Array (
   "<form name=\"klavye\">",
   //---------------
   "<table><tr><td>",
   //---------------
"<table\"><tr><td>",   
        "<table width=\"454\" class=\"klavye\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">",
//Klavye tusları satır1
            "<tr>",
                "<td nowrap=\"nowrap\" colspan=\"2\">",
                    "<input type=\"button\" name=\"Esc\" value=\"Esc\" class=\"standart\"/>&nbsp;&nbsp;&nbsp;&nbsp;",
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
            "</tr>",
//Klavye tusları satır2
            "<tr>",
                "<td nowrap=\"nowrap\" colspan=\"2\">",
                    "<input type=\"button\" name=\"ooo\" value=\"o;\" class=\"standart\"/>",
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
                    "<input type=\"button\" name=\"yildiz\" value=\"'\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"tersunlem\" value=\"¡\" class=\"standart\"/>",
                    
                    //"<input type=\"button\" name=\"tersunlem\" value=\"¡\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"backspace\" value=\"&#8592;\" class=\"backspace\"/>",
                "</td>",
            "</tr>",
//Klavye tusları satır3
            "<tr>",
                "<td nowrap=\"nowrap\" class=\"giris1\">",
                    "<nobr><input type=\"button\" name=\"tab\" value=\"&#8660;\" class=\"sekme\"/>",
                    "<input type=\"button\" name=\"Q\" value=\"Q\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"W\" value=\"W\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"E\" value=\"E\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"R\" value=\"R\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"T\" value=\"T\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"Y\" value=\"Y\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"U\" value=\"U\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"ii\" value=\"I\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"O\" value=\"O\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"P\" value=\"P\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"solkesme\" value=\"'\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"arti\" value=\"+\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"giris1\" class=\"giris1\"/>",
					//"<td>",
					//strGiris1,
					//"</td>",
				"</nobr></td>",
               	"<td nowrap=\"nowrap\" class=\"giris2\">",
					strGiris2,
				"</td>",
            "</tr>",
//Klavye tusları satır4
            "<tr>",
                "<td nowrap=\"nowrap\" class=\"giris1\">",
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
                    "<input type=\"button\" name=\"ss\" value=\"Ñ\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"sagkesme\" value=\"'\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"cc\" value=\"Ç\" class=\"standart\"/>",
               "</td>",
               "<td class=\"giris3\">",
					//strGiris3,
					"<input type=\"button\" name=\"giris3\" class=\"giris3\"/>",				
               "</td>",
            "</tr>",
//Klavye tusları satır5
            "<tr>",
                "<td colspan=\"2\">",
                    "<input type=\"button\" name=\"sol_shift\" value=\"&#8657;\" class=\"sol_shift\"/>",
                    "<input type=\"button\" name=\"kucuktur\" value=\"<\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"Z\" value=\"Z\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"X\" value=\"X\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"C\" value=\"C\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"V\" value=\"V\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"B\" value=\"B\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"N\" value=\"N\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"M\" value=\"M\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"virgul\" value=\",\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"nokta\" value=\",\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"eksi\" value=\"-\" class=\"standart\"/>",
                    "<input type=\"button\" name=\"sag_shift\" value=\"&#8657;\" class=\"sag_shift\"/>",
               "</td>",
            "</tr>",
//Klavye tusları satır6 son satır.
            "<tr>",
                "<td colspan=\"2\">",
                    "<input type=\"button\" name=\"sol_ctrl\" value=\"Ctrl\" class=\"kontrol\"/>",
                    "<input type=\"button\" name=\"sol_start\" value=\"Start\" class=\"kontrol\"/>",
                    "<input type=\"button\" name=\"alt\" value=\"Alt\" class=\"kontrol\"/>",
                    "<input type=\"button\" name=\"bosluk\" value=\" \" class=\"space\"/>",
                    "<input type=\"button\" name=\"altgr\" value=\"Alt Gr\" class=\"kontrol\"/>",
                    "<input type=\"button\" name=\"sag_tus\" value=\"Meta\" class=\"kontrol\"/>",
                    "<input type=\"button\" name=\"sag_ctrl\" value=\"Ctrl\" class=\"kontrol\"/>",
                "</td>",
            "</tr>",
        "</table>",
//----------------------------------------------Numpad ile  klavyeyi birleştir-----------------
        "<td rowspan=\"3\" valign=\"top\">",
         "<table width=\"70%\" border=\"1\">",
         dil_secim_listem,         
            "<tr><th>Öğrenci</th><td>"+ profil_gorunen_ad +"</td></tr>",
            "<tr><td colspan=\"2\">",
		"<img style=\"width:120px;float:center;\" src="+profil_resim+" alt=\"profil resmine ulaşılamadı.\">",
            "</tr></td>",



            "<tr>",
                "<td><font color=\"blue\">Lección</font></td>",
                "<td colspan=\"2\" valign=\"top\" bgcolor=\"blue\">",
                    "<div id=\"dersler\"></div>",
                "</td>",
            "</tr>",
            "<tr>",
                "<td rowspan=\"2\"><font color=\"red\">Exactitud</font></td><td  valign=\"top\" bgcolor=\"red\"><input type=\"edit\" name=\"dogruluk_yuzdesi\" size=\"5\" value=\"0\"/></td>",
            "</tr>",
            "<tr>",
                "<td>Objetivo=95</td>",
            "</tr>",
            "<tr>",
                "<td rowspan=\"2\"><font color=\"green\">Velocidad</font></td><td bgcolor=\"green\" valign=\"top\"><input type=\"edit\" name=\"hizlilik\" size=\"5\" value=\"0\"/></td>",
            "</tr>",
            "<tr>",
                "<td>Objetivo=100</td>",
            "</tr>",
         "</table>",
    //---------------
        "</td></tr>",
        "<tr><td>",
   //---------------
        "<table  border=\"0\" cellpadding=\"0\" cellspacing=\"0\">",
            "<tr>",
                "<td rowspan=\"2\"><img name=\"sol_serce\" src=\"grafikler/sol_serce.jpg\"/></td>",
                "<td rowspan=\"2\"><img name=\"sol_yuzuk\" src=\"grafikler/sol_yuzuk.jpg\"/></td>",
                "<td rowspan=\"2\"><img name=\"sol_orta\" src=\"grafikler/sol_orta.jpg\"/></td>",
                "<td rowspan=\"2\"><img name=\"sol_isaret\" src=\"grafikler/sol_isaret.jpg\"/></td>",
                "<td bgcolor=\"white\">&nbsp;</td>",
                "<td rowspan=\"2\"><img name=\"sag_isaret\" src=\"grafikler/sag_isaret.jpg\"/></td>",
                "<td rowspan=\"2\"><img name=\"sag_orta\" src=\"grafikler/sag_orta.jpg\"/></td>",
                "<td rowspan=\"2\"><img name=\"sag_yuzuk\" src=\"grafikler/sag_yuzuk.jpg\"/></td>",
                "<td rowspan=\"2\"><img name=\"sag_serce\" src=\"grafikler/sag_serce.jpg\"/></td>",
            "</tr>",
            "<tr>",
                "<td valign=\"bottom\"><img name=\"basparmaklar\" src=\"grafikler/basparmaklar.jpg\"/></td>",
            "</tr>",
        "</table>",
   //---------------
        "</td></tr>",
        "<tr><td>",
   //---------------
        "<table>",
            "<tr>",
                 "<td><input type=\"edit\" name=\"okumafisi\" class=\"disabled okumafis\" disabled=\"disabled\" spellcheck=\"false\"/></td>",
            "</tr>",
            "<tr>",
                 "<td><input type=\"edit\" name=\"yazmafisi\" class=\"disabled yazmafis\" disabled=\"disabled\" onkeypress=\"return yenitus(event)\" spellcheck=\"false\"/></td>",
            "</tr>",
            "<tr>",
                 "<td><input type=\"edit\" name=\"gostergefisi\" class=\"disabled gostergefis\" disabled=\"disabled\" spellcheck=\"false\"/></td>",
            "</tr>",
        "</table>",
   //---------------
   "</td></tr></table>",
   //---------------
    "</form>"
    );
    var klavye_tekst=klavye_ar.join("");
    return klavye_tekst;
}
