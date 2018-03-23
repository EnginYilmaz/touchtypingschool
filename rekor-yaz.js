var xmlhttp;

function sunucuya_rekor_yaz(ad, ders, dgrlk, hzlk)
{
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
  {
  alert ("Tarayıcınız Çok Eski Lütfen En Son Çıkan Firefox\'u Kullanın");
  return;
  }

var url="rekor-yaz.php";
url=url+"?isim="+ad;
url=url+"&fis="+ders;
url=url+"&dogruluk="+dgrlk;
url=url+"&hizlilik="+hzlk;
url=url+"&sid="+Math.random();
//alert ("url="+url);
xmlhttp.onreadystatechange=sunucuya_rekor_yazildi;
xmlhttp.open("GET",url,true);
xmlhttp.send(null);
}

function sunucuya_rekor_yazildi()
{
    if (xmlhttp.readyState==4)
    {
        //alert ("sunucuya rekor yazıldı");
		//alert (xmlhttp.responseText);
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


