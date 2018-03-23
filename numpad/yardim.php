<?php
session_start();
if (!isset($_SESSION['giris-onaylandi'])
    || $_SESSION['giris-onaylandi'] !== true) {
    header('Location: index.php');
    exit;
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<script>
        function fareaksiyon(nesne,resim){
                nesne.src="grafikler/"+resim;
        }
	</script>
<title>Yardım</title>
</head>
<body bgcolor="#CCCCCC">
<table height="100%" width="100%"><tr><td align="center" valign="middle">
<table border="1" bgcolor="#FFFFFF" width="50%">
<tr>
<td>
<?php echo "<a href=\"klavye_oku.php?q=".$_SESSION['ad']."\">";?>
<img name="ayarlar" border="0" src="grafikler/ayarlar-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'ayarlar-fu.jpg');" onClick="javascript:fareaksiyon(this,'ayarlar-b.jpg');" onMouseOut="javascript:fareaksiyon(this,'ayarlar-bd.jpg');"></a>&nbsp;&nbsp;
<a href="yardim.php"><img name="yardim" border="0" src="grafikler/yardim-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'yardim-fu.jpg');" onClick="javascript:fareaksiyon(this,'yardim-b.jpg');" onMouseOut="javascript:fareaksiyon(this,'yardim-bd.jpg');"></a>&nbsp;&nbsp;
<a href="rekor-oku.php"><img name="haftaniniyileri" border="0" src="grafikler/haftaniniyileri-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'haftaniniyileri-fu.jpg');" onClick="javascript:fareaksiyon(this,'haftaniniyileri-b.jpg');" onMouseOut="javascript:fareaksiyon(this,'haftaniniyileri-bd.jpg');"></a>&nbsp;&nbsp;
<a href="onparmak.php" onClick="klavye_sahneye();"><img name="antreman" border="0" src="grafikler/antreman-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'antreman-fu.jpg');" onClick="javascript:fareaksiyon(this,'antreman-b.jpg');" onMouseOut="javascript:fareaksiyon(this,'antreman-bd.jpg');"></a>&nbsp;&nbsp;
<a href="../numpad/onparmak.php?geri=tr_q"><img name="antreman" border="0" src="grafikler/numpadantreman-bd.jpg" onMouseOver="javascript:fareaksiyon(this,'numpadantreman-fu.jpg');" onMouseOut="javascript:fareaksiyon(this,'numpadantreman-bd.jpg');" onClick="javascript:fareaksiyon(this,'numpadantreman-b.jpg');"></a>
</td>
</tr>
<tr><td>
<h1>On parmak nedir?</h1>
<p>
On parmak, klavyeyi devinişsel olarak kullanmaktır. yani bir harfi dilinizle nasıl çıkartırken düşünmeden o sesi çıkartırsanız, bir harfe basarken parmağınız o harfe kendiliğinden hiç düşünmeden gider. Aramayı gerektirmez doğrudan bulmaktır.
</p>
<p>
Psikomotor becerilere örnekler: Bisiklete binmek, yüzmek, yürümek, araç kullanmak, konuşurken harfleri çıkarmamız, klavyeyi on parmak kullanmaktır. Bu becerileri sergilerken bilişsel işlem yapmak gerekmemektedir. Bir bilişsel işlem ve bir devinişsel davranış birlikte gerçekleşebileceği gibi klavye ile yazarken düşünce gayet açıktır.
<p>
Klavyeye bakarak yazmak öte yandan bilişsel bir davranıştır ve klavye haritasından bir harfi bulup parmağımızı düşünerek o kordinata götürerek harfe basmak gibi uzun ve bilişsel ve devinişsel bir işlemin sonucudur aramayı ve bulmayı gerektirir.
</p>
<p>
bilişsel davranışlara örnekler: Matematik problemi çözmek, sosyal bilgiler gibi sayısal sosyal tüm işlemler, hatırlamayı, bilmeyi gerektiren düşünsel faaliyetler, klavyedeki harfi aramak bulmak bilişsel davranışlardır. İki bilişsel faaliyet bir arada çok zor yürür veya zorluk derecesine göre hiç yürümez. Yani üzerinde çalıştığınız konuyu düşünürken klavyedeki harfleri aramak hiç kolay bir faaliyet değildir. Dolayısıyla düşünce açık değildir.
</p>
<h2>On parmağın kuralları</h2>
<ul>
<li>Her harf aynı parmak tarafından basılmalıdır ve hangi parmağın hangi harfe basacağı önceden belirlidir. Asıl amaç kişide aynı parmakla aynı harfe basma alışkanlığı yaratmaktır.
<li>Doğru alışkanlığın gerçekleşmesi için katiyen hata yapılmamalıdır. Hız kendi kendine gelişen bir olgudur. Ancak harfleri kendi kendinize doğru yazmaya başlayamazsınız. Bu ancak gayretle olur. Yanlış yazılan bir harf öğrenerek bastığınız 100 doğru harfe bedeldir.</li>
<li>Öğrenirken mümkün olduğunca yavaş ve düşünerek harflere basmak gerekir. Öyleki her bir harfe gelince bir müddet düşünmeli o harfi zihnimizde canlandırmalı dilimizin ucuyla o harfi seslendirmeliyiz ve sonra o parmağımızı düşünmeli harfle birlikte o parmağımızı düşünmeli ve harfe öyle basmalıyız. Endişelenmeyin hız kendi kendine gelişecektir.</li>
<li>Klavyeye bakılmamalıdır. Klavyeye bakılırsa on parmak öğrenilemez.</li>
</ul>
<h2>Parmakların Türkçe Q Klavyeye yerleştirilmesi</h2>
	<table border="1" align="center">
    	<tr align="center">
    	    <td>A</td><td>S</td><td>D</td><td>F</td>
	        <td colspan="2">Boşluk Tuşu</td>
        	<td>J</td><td>K</td><td>L</td><td>Ş</td>
        </tr>
        <tr align="center">
        	<td>serçe Parmak</td><td>yüzük parmak</td><td>orta parmak</td><td>işaret parmağı</td><td>baş parmak</td><td>baş parmak</td><td>işaret parmağı</td><td>orta parmak</td><td>yüzük parmağı</td><td>serçe parmak</td>
        </tr>
        <tr align="center">
        	<td colspan="5">Sol El</td>
            <td colspan="5">Sağ El</td>
        </tr>
    </table>
<h2>Parmakların Türkçe F Klavyeye yerleştirilmesi</h2>
	<table border="1" align="center">
    	<tr align="center">
    	    <td>U</td><td>E</td><td>İ</td><td>A</td>
	        <td colspan="2">Boşluk Tuşu</td>
        	<td>K</td><td>M</td><td>L</td><td>Y</td>
        </tr>
        <tr align="center">
        	<td>serçe Parmak</td><td>yüzük parmak</td><td>orta parmak</td><td>işaret parmağı</td><td>baş parmak</td><td>baş parmak</td><td>işaret parmağı</td><td>orta parmak</td><td>yüzük parmağı</td><td>serçe parmak</td>
        </tr>
        <tr align="center">
        	<td colspan="5">Sol El</td>
            <td colspan="5">Sağ El</td>
        </tr>
    </table>
    </td></tr></table>
</td>
</tr>
</table>
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