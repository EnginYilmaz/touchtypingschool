//var klavye_turu="tur";//kullanıcının klavye seçenekleri
//var gauge_dogruluk; // ekrana basılan animasyonlu anlık hız göstergesi objesidir.
//var gauge_hizlilik; // ekrana basilan animasyonlu anlik  hiz gostergesi objesidir.
var hiz_gosterge; // ekrana basilan animasyonlu anlik hiz global degeridir.
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
//var tusbasim; // yeni fis boyunca bastığı toplam tus sayisi.
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
var sag_el_karakter= sag_el_listesi();
var sol_el_karakter= sol_el_listesi();
var sayac=0;
var zamanlayici= null;
var satir_sonu_tusu_turu=2; // eğer ingilizce klavye gibi ince enter ise bayrak =1 eğer turkce q daki gibi ise bayrak=3 tur. 3 parcali vaya tek parcali anlaminda. on tanimli olarak 3 parcali turkce q daki gibi buyuk enter tusu secilidir.
var inaktivite_interval= null;
var inaktivite_toplam_tus=0; // toplam tus sayisini tutar uygun degilse cevrimdisi yapar
var aktivite_toplam_tus=0;   // toplam tus sayisini tutar uygun degilse cevrimdisi yapar.
var yanlis_arr = new Array("true"); //en sik yanlis basilan harf arrayi
//karakter ve sayısal arasında donusum yapar.
var sag_el_kod= new Array();
for (i = 0; i < sag_el_karakter.length-1; i++){
    if ( isNaN (sag_el_karakter[i]) ) {
	sag_el_kod[i]=sag_el_karakter[i].charCodeAt(0);
    } else {
	sag_el_kod[i]=sag_el_karakter[i];
    }
}
function en_sik_yanlis_harf(array)
{
    if(array.length == 0)
    	return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
    	var el = array[i];
    	if(modeMap[el] == null)
    		modeMap[el] = 1;
    	else
    		modeMap[el]++;	
    	if(modeMap[el] > maxCount)
    	{
    		maxEl = el;
    		maxCount = modeMap[el];
    	}
    }
    return maxEl;
}
var sol_el_kod= new Array();
for (i = 0; i < sol_el_karakter.length-1; i++){
    if ( isNaN (sol_el_karakter[i]) ) {
    	sol_el_kod[i]=sol_el_karakter[i].charCodeAt(0);
    } else {
    	sol_el_kod[i]=sol_el_karakter[i];
    }
}

function klavye_bas (kullanici) {
	//klavye_oku(kullanici);
}


function dersler_menusu_olustur(menulimiti) {
    var dersmenusu= "<select id=\"ders\" onchange=\"dersler_menusu_cevap(this.value);\" class=\"ders\">";
    for (i=1; i< menulimiti; i++) {
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
    //engin burasi
}

function sonuc_hesapla() {
    //yanlis_arr=new Array('a','b','a','c');
    //if (
    //yanilan_karakter = en_sik_yanlis_harf(yanlis_arr);
    //bitis_zamani ekle
    //oturuma_bitis_zamani_ekle();   <-- bu kısmı düzeltmelisin
    var hizgecti= false;
    var dogrulukgecti=false;
    if (hizlilikhedef<=hizlilik) hizgecti=true;
    if (dogrulukhedef<=dogruluk) dogrulukgecti=true;

    if ( (dogruluk>=95) && (hizlilik >=100) ){
        //sunucuya_rekor_yaz(kullanici_adi,seciliders,dogruluk,hizlilik);
    }
    if ( (hizgecti == true) && (dogrulukgecti == true) && (seciliders == sonders) ) {
		sonders= parseInt(sonders) + 1;
		localStorage.setItem("ders_no",sonders);
		//alert ( "satır sonu turu " + satir_sonu_tusu_turu );
		if ( satir_sonu_tusu_turu == 4 ) { // yalnızca numpada ozgu numpad uzun enter turudur
			//sunucuya_sonuc_yaz(kullanici_adi,sonders,"numpad",true,fis[0][0],yanilan_karakter);//
		} else {
			//sunucuya_sonuc_yaz(kullanici_adi,sonders,"keypad",true,fis[0][0],yanilan_karakter);
		}
		sifirlandi= true;
    } else {
		//alert ( "satır sonu turu " + satir_sonu_tusu_turu );
		if ( satir_sonu_tusu_turu == 4 ) { // yalnızca numpada ozgu numpad uzun enter turudur
			//sunucuya_sonuc_yaz(kullanici_adi,sonders,"numpad",false,fis[0][0],yanilan_karakter);
		} else {
			//sunucuya_sonuc_yaz(kullanici_adi,sonders,"keypad",false,fis[0][0],yanilan_karakter);
		}
        	alert("Yeni derse geçmek için\nkaldığınız en son dersi\n yeterli bir skorla bitirmelisiniz!"); // kilit ile ilgili
        	sifirlandi=true; //kilit ile ilgili
		//klavye_sahneye(); //kilit ile ilgili
				  str_fonksiyon= "yeni_ders("+sonders+")";
          	window.setTimeout(str_fonksiyon, 1000);
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
    //alert ( "ilk harf " + fis[0][0]);
    //alert ("klavye lang= olarak belirlendi"+$klavye_lang);
    satir_sonu_tusu_turu_belirle ();
    //alert ("satır sonu tusu turu"+satir_sonu_tusu_turu);
    onceki_tusu_sondur();
    document.klavye.yazmafisi.value="";
    document.klavye.gostergefisi.value="";
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

    eval("fis=fis" + secim);
    yeni_fis();
    t0=new Date();
}

function yeni_fis() {
   //inaktivite_interval = null;
   //inaktivite_interval = setInterval ( inaktivite_kontrol, 300000 );//300000 5 dakika
   sifirlandi=true;
   y_uzunluk= fis.length;
   x_uzunluk= fis [y].length;
   satir_sonu_tusu_belirle();
   document.klavye.okumafisi.value= fis [y];
   document.klavye.yazmafisi.value= "";
   document.klavye.gostergefisi.value="";
   satir_sonu_tusu_sondur();
   mutlak_shifti_sondur();
   sonraki_tusu_yak();
   varsa_shifti_yak();
   dogruluk_hesapla();
   t=new Date();
   hiz_hesapla(t);
   //alert ( "ilk harf " + fis[0][0]);
}

function yenitus(e) {
    if(window.event) {
        basilikod = e.keyCode;
    } else if(e.which) {
        basilikod = e.which;
    }
    //alert (basilikod);
    if (basilikod==null || basilikod==8){
        return false;//alt gr, tab
    }else {
        basilikarakter = String.fromCharCode(basilikod);
        if ( x < x_uzunluk) {
            varsa_shifti_sondur();
            sonraki_tusu_yak();
            varsa_shifti_yak();
	    if ( basilikarakter==fis[y].charAt(x)) {
		document.klavye.gostergefisi.value= document.klavye.gostergefisi.value + " ";
		dogru ++;
            } else {
		document.klavye.gostergefisi.value= document.klavye.gostergefisi.value + "^";
                yanlis ++;
                yanlis_arr.push(basilikarakter);
                //alert ( basilikarakter );
                //document.klavye.yanlis_sayisi.value= yanlis;
            }
            if (x==x_uzunluk-1) satir_sonu_tusu_yak();
        }else if(x>=x_uzunluk){
           if (satirsonutusu==basilikod) {
                dogru ++;
            }else {
                yanlis++;
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

function satir_sonu_tusu_belirle () {
   numara=Math.round(Math.random()); // yazı tura atmak gibi 0 1 degerleri doner.
   if (numara==0) { //space tuşuna basılmıştır.
        //document.getElementById('yazmafisi_satirsonu').innerHTML="[Space]";
        satirsonutusu= 32; //space tuş kodu
   }else {  //giris tuşuna basılmıştır.
        //document.getElementById('yazmafisi_satirsonu').innerHTML="[Enter]";
        satirsonutusu= 13; //giris tuş kodu
   }
}

function satir_sonu_tusu_yak () {
   //alert ( satir_sonu_tusu_turu);
   if (satir_sonu_tusu_turu == 1) {
	satir_sonu_tusu_yak_1();
   } else if ( satir_sonu_tusu_turu == 3 ) {
    	satir_sonu_tusu_yak_3();
   } else if ( satir_sonu_tusu_turu == 4 ) {
    	satir_sonu_tusu_yak_4();
   }else {
	alert ("satır sonu tusu belirlenemedi");
   }
}

function satir_sonu_tusu_sondur () {
   if (satir_sonu_tusu_turu == 1) { // satir sonu tusu keypad 1 li
	satir_sonu_tusu_sondur_1();
   } else if ( satir_sonu_tusu_turu == 3 ) { // satir sonu tusu turu keypad 3 lu
    	satir_sonu_tusu_sondur_3();
   } else if ( satir_sonu_tusu_turu == 4 ) { // satir sonu tusu turu numpad 
	satir_sonu_tusu_sondur_4 ();
   } else {
	alert ("satır sonu tusu belirlenemedi");
   }
}

function satir_sonu_tusu_sondur_1 () {
    if (satirsonutusu==null) return 0;
	document.klavye.giris.style.background='black';
        document.klavye.giris.style.backgroundImage="url('grafikler/standart-bg.png')";
	document["sag_serce"].src= temel_url + "grafikler/sag_serce.jpg";
	document.klavye.bosluk.style.background='black';
       	document.klavye.bosluk.style.backgroundImage="url('grafikler/standart-bg.png')";
	document["basparmaklar"].src= temel_url + "grafikler/basparmaklar.jpg";
}

function satir_sonu_tusu_yak_1 () {
     if (satirsonutusu==13) {
        document.klavye.giris.style.background='#c98321';
        document.klavye.giris.style.backgroundImage="url('grafikler/standart-bg.png')";
        document["sag_serce"].src= temel_url + "grafikler/sag_serce_sari.jpg";
     }else if(satirsonutusu==32) {
        document.klavye.bosluk.style.background='#c98321';
        document.klavye.bosluk.style.backgroundImage="url('grafikler/standart-bg.png')";
     	document["basparmaklar"].src= temel_url + "grafikler/basparmaklar_sari.jpg";
     }
}

function satir_sonu_tusu_sondur_3 () {
    if (satirsonutusu==null) return 0;
	document.klavye.giris1.style.background='black';
        document.klavye.giris1.style.backgroundImage="url('grafikler/standart-bg.png')";
	document.klavye.giris2.style.background='black';
        document.klavye.giris2.style.backgroundImage="url('grafikler/standart-bg.png')";
	document.klavye.giris3.style.background='black';
        document.klavye.giris3.style.backgroundImage="url('grafikler/standart-bg.png')";
	document["sag_serce"].src= temel_url + "grafikler/sag_serce.jpg";
	document.klavye.bosluk.style.background='black';
        document.klavye.bosluk.style.backgroundImage="url('grafikler/standart-bg.png')";
	document["basparmaklar"].src= temel_url + "grafikler/basparmaklar.jpg";
}

function satir_sonu_tusu_yak_3() {
     //mutlak_shifti_sondur bazen kendiliğinden yanan yeşil parmak tuşuna karşı önlem olarak 25.04.2013 tarihinde engin ekledi.
     mutlak_shifti_sondur();
     //mutlak_shifti_sondur biter
     if (satirsonutusu==13) {
        document.klavye.giris1.style.background='#c98321';
        document.klavye.giris1.style.backgroundImage="url('grafikler/standart-bg.png')";
	document.klavye.giris2.style.background='#c98321';
        document.klavye.giris2.style.backgroundImage="url('grafikler/standart-bg.png')";
        document.klavye.giris3.style.background='#c98321';
        document.klavye.giris3.style.backgroundImage="url('grafikler/standart-bg.png')";
	document["sag_serce"].src= temel_url + "grafikler/sag_serce_sari.jpg";
     }else if(satirsonutusu==32) {
                document.klavye.bosluk.style.background='#c98321';
                document.klavye.bosluk.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["basparmaklar"].src= temel_url + "grafikler/basparmaklar_sari.jpg";
     }
}

function satir_sonu_tusu_sondur_4 () {
    if (satirsonutusu==null) return 0;
	document.klavye.nmgiris4.style.background='black';
        document.klavye.nmgiris4.style.backgroundImage="url('grafikler/standart-bg.png')";
	document["sag_serce"].src= temel_url + "grafikler/sag_serce.jpg";
	document.klavye.bosluk.style.background='black';
       	document.klavye.bosluk.style.backgroundImage="url('grafikler/standart-bg.png')";
	document["basparmaklar"].src= temel_url + "grafikler/basparmaklar.jpg";
}

function satir_sonu_tusu_yak_4 () {
     if (satirsonutusu==13) {
        document.klavye.nmgiris4.style.background='#c98321';
        document.klavye.nmgiris4.style.backgroundImage="url('grafikler/standart-bg.png')";
        document["sag_serce"].src= temel_url + "grafikler/sag_serce_sari.jpg";
     }else if(satirsonutusu==32) {
        document.klavye.bosluk.style.background='#c98321';
        document.klavye.bosluk.style.backgroundImage="url('grafikler/standart-bg.png')";
     	document["basparmaklar"].src= temel_url + "grafikler/basparmaklar_sol_sari.jpg";
     }
}

function varsa_shifti_yak () {
    sonuc=listede_varmi(sol_el_kod,sonrakikod);
    if (sonuc==true) {
        document.klavye.sol_shift.style.background='#7e8d4a';
        document.klavye.sol_shift.style.backgroundImage="url('grafikler/standart-bg.png')";
        document["sol_serce"].src= temel_url + "grafikler/sol_serce_yesil.jpg";
        shiftyanikmi=true;
        return 0;
    }
    sonuc=listede_varmi(sag_el_kod,sonrakikod);
    if (sonuc==true){
        document.klavye.sag_shift.style.background='#7e8d4a';
        document.klavye.sag_shift.style.backgroundImage="url('grafikler/standart-bg.png')";
        document["sag_serce"].src= temel_url + "grafikler/sag_serce_yesil.jpg";
        shiftyanikmi=true;
    }
}
function mutlak_shifti_sondur() {
        document.klavye.sag_shift.style.background='black';
        document.klavye.sag_shift.style.backgroundImage="url('grafikler/standart-bg.png')";
        document.klavye.sol_shift.style.background='black';
        document.klavye.sol_shift.style.backgroundImage="url('grafikler/standart-bg.png')";
        document["sag_serce"].src= temel_url + "grafikler/sag_serce.jpg";
        document["sol_serce"].src= temel_url + "grafikler/sol_serce.jpg";
}
function varsa_shifti_sondur(){
    if ( (x+1) >= x_uzunluk) return 0;
    if (shiftyanikmi==true){
        document.klavye.sag_shift.style.background='black';
        document.klavye.sag_shift.style.backgroundImage="url('grafikler/standart-bg.png')";
        document.klavye.sol_shift.style.background='black';
        document.klavye.sol_shift.style.backgroundImage="url('grafikler/standart-bg.png')";
        if ( (sonrakikod != 34 ) && ( sonrakikod != 42 ) ) {
            document["sag_serce"].src= temel_url + "grafikler/sag_serce.jpg";
            document["sol_serce"].src= temel_url + "grafikler/sol_serce.jpg";
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
    //alert ("hiz_hesapla calisti");
    if (!t1) t1=new Date();
    deltat= t1-t0;
    if (!deltat) return 0;
    saniye= deltat/1000;
    hizlilikR= ( 60 * (dogru+yanlis)) / saniye;
    hizlilik= parseInt (hizlilikR);
    tmp=hizlilik.toString();
    txt_hiz=tmp.slice(0,6);
    document.klavye.hizlilik.value=txt_hiz;
    //if (saniye>10)alert("saniye büyüktür 10");
}

//eger kullanici yeni ders fonksiyonun icinde belirtildigi sure kadar disarida olursa oturumu sonlandir.
function inaktivite_kontrol ( ) {
    aktivite_toplam_tus = dogru + yanlis; 
    if ( inaktivite_toplam_tus == aktivite_toplam_tus ) {
        //alert (logout_style);//alert ("belli bir süredir işlem yapmıyorsunuz...");
        clearInterval ( inaktivite_interval );
        window.location = logout_style + "?sebep=zamanasimi";
    } else {
        inaktivite_toplam_tus = aktivite_toplam_tus;
    }
}
// asdf asdf asdf
function dil_secim_listesi_secili_dil () {
        var diller_listesi = {tr_f:"Türkçe F", tr_q:"Türkçe Q", alm:"Deutsch", en_q:"English Q", isp:"Español Q", ita:"Italiano Q"};
        for (var i=0; i<diller_listesi.length; i++) {
         if (diller_listesi[i] == secilidil) secili_dil = " selected";
        }
        var val = secilidil;
        var sel = document.getElementById('secilidil');
        var opts = sel.options;
        for(var opt, j = 0; opt = opts[j]; j++) {
         if(opt.value == val) {
           sel.selectedIndex = j;
            break;
         }
        }
}

function dil_secim_listesi () {
      var dil_secim_select =
      "<select id=\"secilidil\" onchange=\"secilidil_degistir(this.options[this.selectedIndex].value);\">"+
        "<option value=\"tr_f\">Türkçe F</option>"+
        "<option value=\"tr_q\">Türkçe Q</option>"+
        "<option value=\"alm\">Deutsch</option>"+
        "<option value=\"en_q\">İngilizce</option>"+
        "<option value=\"isp\">Español Q</option>"+
      "</select>";
      //<select id="arayuz_dili" onchange="arayuz_dili_degistir(this.options[this.selectedIndex].value);">
      //<option value="af">Afrikaans</option> <option value="ar">Arabic</option> <option value="bg">Bulgarian</option> <option value="bn">Bengali</option> <option value="cs">Czech</option> <option value="da">Danish</option> <option value="de">German</option> <option value="el">Greek</option> <option value="en">English</option> <option value="es">Spanish</option> <option value="et">Estonian</option> <option value="fa">Persian</option> <option value="fi">Finnish</option> <option value="fr">French</option> <option value="gu">Gujarati</option> <option value="he">Hebrew</option> <option value="hi">Hindi</option> <option value="hr">Croatian</option> <option value="hu">Hungarian</option> <option value="id">Indonesian</option> <option value="it">Italian</option> <option value="ja">Japanese</option> <option value="kn">Kannada</option> <option value="ko">Korean</option> <option value="lt">Lithuanian</option> <option value="lv">Latvian</option> <option value="mk">Macedonian</option> <option value="ml">Malayalam</option> <option value="mr">Marathi</option> <option value="ne">Nepali</option> <option value="nl">Dutch</option> <option value="no">Norwegian</option> <option value="pa">Punjabi</option> <option value="pl">Polish</option> <option value="pt">Portuguese</option> <option value="ro">Romanian</option> <option value="ru">Russian</option> <option value="sk">Slovak</option> <option value="sl">Slovene</option> <option value="so">Somali</option> <option value="sq">Albanian</option> <option value="sv">Swedish</option> <option value="sw">Swahili</option> <option value="ta">Tamil</option> <option value="te">Telugu</option> <option value="th">Thai</option> <option value="tl">Tagalog</option> <option value="tr">Turkish</option> <option value="uk">Ukrainian</option> <option value="ur">Urdu</option> <option value="vi">Vietnamese</option> <option value="zh-cn">Simplified Chinese</option> <option value="zh-tw">Traditional Chinese</option>
      return dil_secim_select;
}
// asdf asdf asdf
