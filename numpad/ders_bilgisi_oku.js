var xmlhttp;

function sunucudan_oku(str)
{
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
  {
  alert ("Tarayıcınız Çok Eski Lütfen En Son Çıkan Firefox\'u Kullanın");
  return;
  }
var url="ders_bilgisi_oku.php";
url=url+"?q="+str;
url=url+"&sid="+Math.random();
xmlhttp.onreadystatechange=sunucudan_okundu;
xmlhttp.open("GET",url,true);
xmlhttp.send(null);
}

function sunucudan_okundu()
{
    if (xmlhttp.readyState==4)
    {
        eval (xmlhttp.responseText);
		sonders= Number(ders);
        seciliders=sonders;
		document.getElementById('sahne').innerHTML=sahne_bas();
		dersler_menusu_olustur(sonders);
		sifirlandi= true;
		alert("başla...");
		if (sonders <=1)sonders=1;
		var str_fonksiyon;
		alert (sonders);
		str_fonksiyon= "yeni_ders("+sonders+")";
        	window.setTimeout(str_fonksiyon, 1000);
    }
}

function GetXmlHttpObject()
{
    if (window.XMLHttpRequest)
    {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        return new XMLHttpRequest();
    }
    if (window.ActiveXObject)
    {
        // code for IE6, IE5
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
    return null;
}
