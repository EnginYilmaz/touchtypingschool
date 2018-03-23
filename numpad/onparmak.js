//var klavye_turu="tur";//kullanıcının klavye seçenekleri
var sonders; //kullanıcı en son hangi dersi calisiyor.
var seciliders;//kullancı şu an hangi dersi çalışıyor
var zamanlayici;
var acilis_ekrani_yuklendimi=false;
var temel_url="";
var fis;
var x; //fis arrayinin x indisi
var y; //fis arrayinin y indisi
var x_uzunluk=0; //fis arrayinin x uzunlugu
var y_uzunluk=0; //fis arrayanin y uzunlugu
var dogru; //ders boyunca yapmış oldugu dogru sayısı
var dogruluk; //doğruluk yüzdesi
var txt_dogruluk;
var txt_hiz;
var hizlilik; //hızlılık yüzdesi
var hizlilikhedef=100; // geçmesi gereken hedef
var dogrulukhedef=95; // kaç doğru yapması gerektiği
var t0; //derse başlangıç anı
var yanlis; //ders boyunca yapmış oldugu yanlış sayısı
var basilikod; //
var basilikarakter;
var sonrakikod;
var sonuc;
var oncekikod;
var satirsonutusu;
var sifirlandi;
var shiftyanikmi=false;
var sag_el= new Array (65,66,67,68,69,70,71,81,82,83,84,86,87,88,89,90);
var sol_el= new Array (286,220,350,304,214,199,72,73,74,75,76,77,78,79,80,85);
var turkce_kodlar= new Array (252,220,287,286,351,350,305,304, 246,214, 231,199);

function klavye_bas (kullanici) {
	klavye_oku(kullanici);
}

function dersler_menusu_olustur(menulimiti) {
    var dersmenusu= "<select id=\"ders\" onchange=\"dersler_menusu_cevap(this.value);\" class=\"ders\">";
    for (i=1; i<menulimiti; i++) {
        dersmenusu += "<option value=\""+i+"\">" + i + "</option>";
    }
    dersmenusu +="<option selected=true value=\""+i+"\">" + i + "</option>";
    dersmenusu +="</select>";
    document.getElementById("dersler").innerHTML = dersmenusu;
}

function dersler_menusu_cevap(secim) {
	sifirlandi=true;
    seciliders=secim;
    yeni_ders(secim);
}

function sonuc_hesapla() {
    var hizgecti= false;
    var dogrulukgecti=false;
    if (hizlilikhedef<=hizlilik) hizgecti=true;
    if (dogrulukhedef<=dogruluk) dogrulukgecti=true;

    if ( (dogruluk>=75) && (hizlilik >=25) ){
        sunucuya_rekor_yaz(kullanici_adi,seciliders,dogruluk,hizlilik);
    }
    if ( (hizgecti==true) && (dogrulukgecti==true)  && (seciliders==sonders) ) {
        //alert("seciliders="+seciliders+" sonders="+ sonders);
		sonders= sonders + 1;
		//alert ("sonders artırıldı ama sonuç kaç" + sonders);
		sunucuya_sonuc_yaz(kullanici_adi,sonders);
		
    } else {
        alert("Yeni derse geçmek için\nkaldığınız en son dersi\n yeterli bir skorla bitirmelisiniz!");
        sifirlandi=true;
        //yeni_ders(seciliders);
		klavye_sahneye();
	}
}

function listede_varmi(arr, val) {
  inArray = false;
  for (i = 0; i < arr.length; i++)
  if (val == arr[i])
  inArray = true;
  return inArray;
}

function yeni_ders(secim) {
    onceki_tusu_sondur();
    document.klavye.yazmafisi.value="";
    document.klavye.yazmafisi.disabled=false;
    document.klavye.yazmafisi.focus();
    x=0;
    y=0;
    x_uzunluk=0;
    y_uzunluk=0;
    dogru=0;
    yanlis=0;
    hizlilik=0;
    dogruluk=0;
    basilikod=null;
    basilikarakter=null;
    sonrakikod=null;
    oncekikod=null;
    satirsonutusu=null;
    sifirlandi=false;
    shiftyanikmi=false;
    kadran_hiz(0);
    if (zamanlayici) {
        zamanlayici= null;
        clearInterval(zamanlayici);
    }
    zamanlayici= setInterval("anlik_hiz_hesapla()", 100);
    eval("fis=fis" + secim);
    yeni_fis();
    t0=new Date();
}

function yeni_fis() {
   y_uzunluk= fis.length;
   x_uzunluk= fis [y].length;
   satir_sonu_tusu_belirle();
   document.klavye.okumafisi.value= fis [y];
   document.klavye.yazmafisi.value= "";
   sifirlandi=true;
   sonraki_tusu_yak();
   satir_sonu_tusu_sondur();
   varsa_shifti_yak();
   dogruluk_hesapla();
   t=new Date();
   hiz_hesapla(t);
}

function yenitus(e) {
    if(window.event) {
        basilikod = e.keyCode;
		//alert("basılı kod="+basilikod);		
    } else if(e.which) {
        basilikod = e.which;
    }

    if (basilikod==null || basilikod==8){
        return false;//alt gr, tab
    }else {
        basilikarakter = String.fromCharCode(basilikod);
        if ( x < x_uzunluk) {
            varsa_shifti_sondur();
            sonraki_tusu_yak();
            varsa_shifti_yak();
            
			//alert("basılı karakter" + basilikarakter + "fisycarx=" +fis[y].charAt(x));
			if ( basilikarakter==fis[y].charAt(x)) {
 
				dogru ++;
            } else {
                yanlis ++;
                //document.klavye.yanlis_sayisi.value= yanlis;
            }
            if (x==x_uzunluk-1) satir_sonu_tusu_yak();
        }else if(x>=x_uzunluk){
           if (satirsonutusu==basilikod) {
                dogru ++;
            }else {
                yanlis++;
                //document.klavye.yanlis_sayisi.value= yanlis;
            }
            x=0;
            y++;
            if (y==y_uzunluk){//fis sonuna da gelindi mi
                document.klavye.yazmafisi.disabled=true;
                hiz_hesapla();
                dogruluk_hesapla();
                sonuc_hesapla();
            } else {
                yeni_fis();
            }
            return false;
        }
        x++;
        basilikod=null;//alt gr nin tamponu temizlemek icin
    }
}

function sonraki_tusu_yak(){
	//alert ("sıfırlandı" + sifirlandi);
	onceki_tusu_sondur();
    if ( (x+1) >= x_uzunluk) return 0;

 //   sonrakikarakter=fis[y].charAt(x+1);
//alert("sifirlandi="+sifirlandi);
    if (sifirlandi==true){
	//	alert("sifirlandi true çalıştı");
        //sonrakikarakter=fis[y][x];
		//alert("selam sıfırlandı");
        sonrakikarakter=fis[y].charAt(x);
		sifirlandi=false;
    }else if(sifirlandi==false){
//		alert("sifirlandi false çalıştı");
        //sonrakikarakter= fis[y][x+1];
		sonrakikarakter=fis[y].charAt(x+1);
    }
	
	//alert ("fis="+fis[y].charAt(x));
	//alert("sonraki karakter"+sonrakikarakter);
	
    sonrakikod= sonrakikarakter.charCodeAt(0);
	
     switch(sonrakikod) {
		 
        case 13:document.klavye.nmgiris4.style.background='#c98321';
                document.klavye.nmgiris4.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_serce"].src= temel_url + "../grafikler/sag_serce_sari.jpg";
                break;

 	case 32:document.klavye.bosluk.style.background='#c98321';
                document.klavye.bosluk.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["basparmaklar"].src= temel_url + "../grafikler/basparmaklar_sol_sari.jpg";
                break;

	case 42:document.klavye.nmyildiz.style.background='#c98321';
                document.klavye.nmyildiz.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "../grafikler/sag_yuzuk_sari.jpg";
                break;
        case 43:document.klavye.nmarti.style.background='#c98321';
                document.klavye.nmarti.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_serce"].src="../grafikler/sag_serce_sari.jpg";
                break;
        case 44:document.klavye.nmvirgul.style.background='#c98321';
                document.klavye.nmvirgul.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "../grafikler/sag_yuzuk_sari.jpg";
                break;
        case 45:document.klavye.nmeksi.style.background='#c98321';
                document.klavye.nmeksi.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_serce"].src= temel_url + "../grafikler/sag_serce_sari.jpg";
                break;
        case 47:document.klavye.nmbolu.style.background='#c98321';
                document.klavye.nmbolu.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_orta"].src= temel_url + "../grafikler/sag_orta_sari.jpg";
                break;
        case 48:document.klavye.nmsifir.style.background='#c98321';
                document.klavye.nmsifir.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_isaret"].src= temel_url + "../grafikler/sag_isaret_sari.jpg";
                break;
        case 49:document.klavye.nmbir.style.background='#c98321';
                document.klavye.nmbir.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_isaret"].src= temel_url + "../grafikler/sag_isaret_sari.jpg";
                break;
        case 50:document.klavye.nmiki.style.background='#c98321';
                document.klavye.nmiki.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_orta"].src= temel_url + "../grafikler/sag_orta_sari.jpg";
                break;
        case 51:document.klavye.nmuc.style.background='#c98321';
                document.klavye.nmuc.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "../grafikler/sag_yuzuk_sari.jpg";
                break;
        case 52:document.klavye.nmdort.style.background='#c98321';
                document.klavye.nmdort.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_isaret"].src= temel_url + "../grafikler/sag_isaret_sari.jpg";
                break;
        case 53:document.klavye.nmbes.style.background='#c98321';
                document.klavye.nmbes.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_orta"].src= temel_url + "../grafikler/sag_orta_sari.jpg";
                break;
        case 54:document.klavye.nmalti.style.background='#c98321';
                document.klavye.nmalti.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "../grafikler/sag_yuzuk_sari.jpg";
                break;
        case 55:document.klavye.nmyedi.style.background='#c98321';
                document.klavye.nmyedi.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_isaret"].src= temel_url + "../grafikler/sag_isaret_sari.jpg";
                break;
        case 56:document.klavye.nmsekiz.style.background='#c98321';
                document.klavye.nmsekiz.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_orta"].src= temel_url + "../grafikler/sag_orta_sari.jpg";
                break;
        case 57:document.klavye.nmdokuz.style.background='#c98321';
                document.klavye.nmdokuz.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "../grafikler/sag_yuzuk_sari.jpg";
                break;
       }
       oncekikod=sonrakikod;
}

function onceki_tusu_sondur(){
     if (oncekikod==null)return 0;
 
 	 switch(oncekikod) {
        case 13:document.klavye.nmgiris4.style.background='black';
                document.klavye.nmgiris4.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_serce"].src= temel_url + "../grafikler/sag_serce.jpg";
                break;

 	case 32:document.klavye.bosluk.style.background='black';
                document.klavye.bosluk.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["basparmaklar"].src= temel_url + "../grafikler/basparmaklar.jpg";
                break;

	case 42:document.klavye.nmyildiz.style.background='black';
                document.klavye.nmyildiz.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "../grafikler/sag_yuzuk.jpg";
                break;
        case 43:document.klavye.nmarti.style.background='black';
                document.klavye.nmarti.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_serce"].src="../grafikler/sag_serce.jpg";
                break;
        case 44:document.klavye.nmvirgul.style.background='black';
                document.klavye.nmvirgul.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "../grafikler/sag_yuzuk.jpg";
                break;
        case 45:document.klavye.nmeksi.style.background='black';
                document.klavye.nmeksi.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_serce"].src= temel_url + "../grafikler/sag_serce.jpg";
                break;
        case 47:document.klavye.nmbolu.style.background='black';
                document.klavye.nmbolu.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_orta"].src= temel_url + "../grafikler/sag_orta.jpg";
                break;
        case 48:document.klavye.nmsifir.style.background='black';
                document.klavye.nmsifir.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_isaret"].src= temel_url + "../grafikler/sag_isaret.jpg";
                break;
        case 49:document.klavye.nmbir.style.background='black';
                document.klavye.nmbir.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_isaret"].src= temel_url + "../grafikler/sag_isaret.jpg";
                break;
        case 50:document.klavye.nmiki.style.background='black';
                document.klavye.nmiki.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_orta"].src= temel_url + "../grafikler/sag_orta.jpg";
                break;
        case 51:document.klavye.nmuc.style.background='black';
                document.klavye.nmuc.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "../grafikler/sag_yuzuk.jpg";
                break;
        case 52:document.klavye.nmdort.style.background='black';
                document.klavye.nmdort.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_isaret"].src= temel_url + "../grafikler/sag_isaret.jpg";
                break;
        case 53:document.klavye.nmbes.style.background='black';
                document.klavye.nmbes.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_orta"].src= temel_url + "../grafikler/sag_orta.jpg";
                break;
        case 54:document.klavye.nmalti.style.background='black';
                document.klavye.nmalti.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "../grafikler/sag_yuzuk.jpg";
                break;
        case 55:document.klavye.nmyedi.style.background='black';
                document.klavye.nmyedi.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_isaret"].src= temel_url + "../grafikler/sag_isaret.jpg";
                break;
        case 56:document.klavye.nmsekiz.style.background='black';
                document.klavye.nmsekiz.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_orta"].src= temel_url + "../grafikler/sag_orta.jpg";
                break;
        case 57:document.klavye.nmdokuz.style.background='black';
                document.klavye.nmdokuz.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "../grafikler/sag_yuzuk.jpg";
                break;
       }
}


function satir_sonu_tusu_belirle () {
   numara=Math.round(Math.random()); // yazı tura atmak gibi 0 1 degerleri doner.
   if (numara==0) { //space tuşuna basılmıştır.
        document.getElementById('yazmafisi_satirsonu').innerHTML="[Space]";
        satirsonutusu= 32; //space tuş kodu
   }else {  //giris tuşuna basılmıştır.
        document.getElementById('yazmafisi_satirsonu').innerHTML="[Enter]";
        satirsonutusu= 13; //giris tuş kodu
   }
}

function satir_sonu_tusu_sondur () {
    if (satirsonutusu==null) return 0;
		document.klavye.nmgiris4.style.background='black';
                document.klavye.nmgiris4.style.backgroundImage="url('../grafikler/standart-bg.png')";
		document["sag_serce"].src= temel_url + "../grafikler/sag_serce.jpg";
		document.klavye.bosluk.style.background='black';
                document.klavye.bosluk.style.backgroundImage="url('../grafikler/standart-bg.png')";
		document["basparmaklar"].src= temel_url + "../grafikler/basparmaklar.jpg";
 }

function satir_sonu_tusu_yak() {
     if (satirsonutusu==13) {
        document.klavye.nmgiris4.style.background='#c98321';
        document.klavye.nmgiris4.style.backgroundImage="url('../grafikler/standart-bg.png')";
	document["sag_serce"].src= temel_url + "../grafikler/sag_serce_sari.jpg";
     }else if(satirsonutusu==32) {
                document.klavye.bosluk.style.background='#c98321';
                document.klavye.bosluk.style.backgroundImage="url('../grafikler/standart-bg.png')";
                document["basparmaklar"].src= temel_url + "../grafikler/basparmaklar_sol_sari.jpg";
     }
 }

function varsa_shifti_yak () {
    sonuc=listede_varmi(sol_el,sonrakikod);
    if (sonuc==true) {
        document.klavye.sol_shift.style.background='#7e8d4a';
        document["sol_serce"].src= temel_url + "../grafikler/sol_serce_yesil.jpg";
        shiftyanikmi=true;
        return 0;
    }
    sonuc=listede_varmi(sag_el,sonrakikod);
    if (sonuc==true){
        document.klavye.sag_shift.style.background='#7e8d4a';
        document["sag_serce"].src= temel_url + "../grafikler/sag_serce_yesil.jpg";
        shiftyanikmi=true;
    }
}

function varsa_shifti_sondur(){
    if ( (x+1) >= x_uzunluk) return 0;
    if (shiftyanikmi==true){
        document.klavye.sag_shift.style.background='black';
        document.klavye.sol_shift.style.background='black';
        if ( (sonrakikod != 34 ) && ( sonrakikod != 42 ) ) {
            document["sag_serce"].src= temel_url + "../grafikler/sag_serce.jpg";
            document["sol_serce"].src= temel_url + "../grafikler/sol_serce.jpg";
        }
    }
    shiftyanikmi=false;
}

function dogruluk_hesapla(){
    if (dogru!=0 || yanlis!=0) {
		
        dogruluk= (100*dogru) / (dogru+yanlis);
        tmp=dogruluk.toString();
        txt_dogruluk=tmp.slice(0, 6);
        document.klavye.dogruluk_yuzdesi.value=txt_dogruluk;
	}
}

function hiz_hesapla(t1){
    if (!t1) t1=new Date();
    deltat= t1-t0;
    if (!deltat) return 0;
    saniye= deltat/1000;
    hizlilik= ( 60 * (dogru+yanlis)) / saniye;
    tmp=hizlilik.toString();
    txt_hiz=tmp.slice(0,6);
    document.klavye.hizlilik.value=txt_hiz;
}

var sayac=0;
function anlik_hiz_hesapla (){
    sayac= sayac+0.1;
    var hiz;
    hiz= Math.round( (60* (dogru+yanlis)) / sayac);
    //alert(sayac);
    kadran_hiz(hiz);
}
function getFlashMovieObject(movieName)
{
  if (window.document[movieName])
  {
      return window.document[movieName];
  }
  if (navigator.appName.indexOf("Microsoft Internet")==-1)
  {
    if (document.embeds && document.embeds[movieName])
      return document.embeds[movieName];
  }
  else // if (navigator.appName.indexOf("Microsoft Internet")!=-1)
  {
    return document.getElementById(movieName);
  }
}

function kadran_hiz(txt_hiz)
{
     var flashMovie=getFlashMovieObject("speedo1");
     flashMovie.SetVariable("var1", txt_hiz);
}
