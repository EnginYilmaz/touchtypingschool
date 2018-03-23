var xmlhttp;

function sunucuya_sonuc_yaz(ad, ders)
{
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
  {
  alert ("Tarayıcınız Çok Eski Lütfen En Son Çıkan Firefox\'u Kullanın");
  return;
  }
var url="ders_bilgisi_yaz.php";
url=url+"?q="+ad;
url=url+"&ders="+ders;
url=url+"&sid="+Math.random();

xmlhttp.onreadystatechange=sunucuya_yazildi;
xmlhttp.open("GET",url,true);
xmlhttp.send(null);
}

function sunucuya_yazildi()
{
    if (xmlhttp.readyState==4)
    {
		klavye_sahneye();
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