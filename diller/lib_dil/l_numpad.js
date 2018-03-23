function satir_sonu_tusu_turu_belirle () {
	satir_sonu_tusu_turu=4 // eğer ingilizce klavye gibi ince enter ise bayrak =1 eğer turkce q daki gibi ise bayrak=3 tur. 3 parcali vaya tek parcali 		anlaminda. on tanimli olarak 3 parcali turkce q daki gibi buyuk enter tusu secilidir.
}

function sag_el_listesi() {
	var sag_el_karakter= new Array (65,66,67,68,69,70,71,81,82,83,84,86,87,88,89,90);
	return sag_el_karakter; 
}

function sol_el_listesi() {
	var sol_el_karakter= new Array (286,220,350,304,214,199,72,73,74,75,76,77,78,79,80,85);
	return sag_el_karakter; 
}



function sonraki_tusu_yak(){
    onceki_tusu_sondur();
    if ( (x+1) >= x_uzunluk) return 0;

    if (sifirlandi==true){
        sonrakikarakter=fis[y].charAt(x);
		sifirlandi=false;
    }else {
		sonrakikarakter=fis[y].charAt(x+1);
    }
    sonrakikod= sonrakikarakter.charCodeAt(0);
     switch(sonrakikod) {
		 
        case 13:document.klavye.nmgiris4.style.background='#c98321';
                document.klavye.nmgiris4.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_serce"].src= temel_url + "grafikler/sag_serce_sari.jpg";
                break;

 	case 32:document.klavye.bosluk.style.background='#c98321';
                document.klavye.bosluk.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["basparmaklar"].src= temel_url + "grafikler/basparmaklar_sol_sari.jpg";
                break;

	case 42:document.klavye.nmyildiz.style.background='#c98321';
                document.klavye.nmyildiz.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "grafikler/sag_yuzuk_sari.jpg";
                break;
        case 43:document.klavye.nmarti.style.background='#c98321';
                document.klavye.nmarti.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_serce"].src="grafikler/sag_serce_sari.jpg";
                break;
        case 44:document.klavye.nmvirgul.style.background='#c98321';
                document.klavye.nmvirgul.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "grafikler/sag_yuzuk_sari.jpg";
                break;
        case 45:document.klavye.nmeksi.style.background='#c98321';
                document.klavye.nmeksi.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_serce"].src= temel_url + "grafikler/sag_serce_sari.jpg";
                break;
        case 47:document.klavye.nmbolu.style.background='#c98321';
                document.klavye.nmbolu.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_orta"].src= temel_url + "grafikler/sag_orta_sari.jpg";
                break;
        case 48:document.klavye.nmsifir.style.background='#c98321';
                document.klavye.nmsifir.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_isaret"].src= temel_url + "grafikler/sag_isaret_sari.jpg";
                break;
        case 49:document.klavye.nmbir.style.background='#c98321';
                document.klavye.nmbir.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_isaret"].src= temel_url + "grafikler/sag_isaret_sari.jpg";
                break;
        case 50:document.klavye.nmiki.style.background='#c98321';
                document.klavye.nmiki.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_orta"].src= temel_url + "grafikler/sag_orta_sari.jpg";
                break;
        case 51:document.klavye.nmuc.style.background='#c98321';
                document.klavye.nmuc.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "grafikler/sag_yuzuk_sari.jpg";
                break;
        case 52:document.klavye.nmdort.style.background='#c98321';
                document.klavye.nmdort.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_isaret"].src= temel_url + "grafikler/sag_isaret_sari.jpg";
                break;
        case 53:document.klavye.nmbes.style.background='#c98321';
                document.klavye.nmbes.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_orta"].src= temel_url + "grafikler/sag_orta_sari.jpg";
                break;
        case 54:document.klavye.nmalti.style.background='#c98321';
                document.klavye.nmalti.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "grafikler/sag_yuzuk_sari.jpg";
                break;
        case 55:document.klavye.nmyedi.style.background='#c98321';
                document.klavye.nmyedi.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_isaret"].src= temel_url + "grafikler/sag_isaret_sari.jpg";
                break;
        case 56:document.klavye.nmsekiz.style.background='#c98321';
                document.klavye.nmsekiz.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_orta"].src= temel_url + "grafikler/sag_orta_sari.jpg";
                break;
        case 57:document.klavye.nmdokuz.style.background='#c98321';
                document.klavye.nmdokuz.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "grafikler/sag_yuzuk_sari.jpg";
                break;
       }
       oncekikod=sonrakikod;
}

function onceki_tusu_sondur(){
     if (oncekikod==null)return 0;
     switch(oncekikod) {
        case 13:document.klavye.nmgiris4.style.background='black';
                document.klavye.nmgiris4.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_serce"].src= temel_url + "grafikler/sag_serce.jpg";
                break;

 	case 32:document.klavye.bosluk.style.background='black';
                document.klavye.bosluk.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["basparmaklar"].src= temel_url + "grafikler/basparmaklar.jpg";
                break;

	case 42:document.klavye.nmyildiz.style.background='black';
                document.klavye.nmyildiz.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "grafikler/sag_yuzuk.jpg";
                break;
        case 43:document.klavye.nmarti.style.background='black';
                document.klavye.nmarti.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_serce"].src="grafikler/sag_serce.jpg";
                break;
        case 44:document.klavye.nmvirgul.style.background='black';
                document.klavye.nmvirgul.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "grafikler/sag_yuzuk.jpg";
                break;
        case 45:document.klavye.nmeksi.style.background='black';
                document.klavye.nmeksi.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_serce"].src= temel_url + "grafikler/sag_serce.jpg";
                break;
        case 47:document.klavye.nmbolu.style.background='black';
                document.klavye.nmbolu.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_orta"].src= temel_url + "grafikler/sag_orta.jpg";
                break;
        case 48:document.klavye.nmsifir.style.background='black';
                document.klavye.nmsifir.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_isaret"].src= temel_url + "grafikler/sag_isaret.jpg";
                break;
        case 49:document.klavye.nmbir.style.background='black';
                document.klavye.nmbir.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_isaret"].src= temel_url + "grafikler/sag_isaret.jpg";
                break;
        case 50:document.klavye.nmiki.style.background='black';
                document.klavye.nmiki.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_orta"].src= temel_url + "grafikler/sag_orta.jpg";
                break;
        case 51:document.klavye.nmuc.style.background='black';
                document.klavye.nmuc.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "grafikler/sag_yuzuk.jpg";
                break;
        case 52:document.klavye.nmdort.style.background='black';
                document.klavye.nmdort.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_isaret"].src= temel_url + "grafikler/sag_isaret.jpg";
                break;
        case 53:document.klavye.nmbes.style.background='black';
                document.klavye.nmbes.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_orta"].src= temel_url + "grafikler/sag_orta.jpg";
                break;
        case 54:document.klavye.nmalti.style.background='black';
                document.klavye.nmalti.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "grafikler/sag_yuzuk.jpg";
                break;
        case 55:document.klavye.nmyedi.style.background='black';
                document.klavye.nmyedi.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_isaret"].src= temel_url + "grafikler/sag_isaret.jpg";
                break;
        case 56:document.klavye.nmsekiz.style.background='black';
                document.klavye.nmsekiz.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_orta"].src= temel_url + "grafikler/sag_orta.jpg";
                break;
        case 57:document.klavye.nmdokuz.style.background='black';
                document.klavye.nmdokuz.style.backgroundImage="url('grafikler/standart-bg.png')";
                document["sag_yuzuk"].src= temel_url + "grafikler/sag_yuzuk.jpg";
                break;
       }
}

function satir_sonu_tusu_belirle () {
   numara=Math.round(Math.random());
   if (numara==0) {
        document.getElementById('yazmafisi_satirsonu').innerHTML="[Space]";
        satirsonutusu= 32; //space
   }else {  //giris
        document.getElementById('yazmafisi_satirsonu').innerHTML="[Enter]";
        satirsonutusu= 13; //giris
   }
}
