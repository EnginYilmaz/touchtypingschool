<?php

$tarih_ar= getdate();
$tarih= $tarih_ar['mday'].".";
$tarih .= $tarih_ar['mon'].".";
$tarih .= $tarih_ar['year'];

$kayit = array(
'isim' => $_REQUEST["isim"],
'fis' => $_REQUEST['fis'],
'tarih' => $tarih,
'dogruluk' => $_REQUEST['dogruluk'],
'hizlilik' => $_REQUEST['hizlilik']
);
/*
echo $kayit["isim"];
echo $kayit["fis"];*/

$doc = new DOMDocument();
$doc->load( 'rekor.xml' );
$doc->formatOutput = true;

$r = $doc->getElementsByTagName( "kayitlar" )->item(0);

$b = $doc->createElement( "kayit" );

$isim = $doc->createElement( "isim" );
$isim->appendChild(
$doc->createTextNode( $kayit['isim'] )
);
$b->appendChild( $isim );

$tarih = $doc->createElement( "tarih" );
$tarih->appendChild(
$doc->createTextNode( $kayit['tarih'] )
);
$b->appendChild( $tarih );

$fis = $doc->createElement( "fis" );
$fis->appendChild(
$doc->createTextNode( $kayit['fis'] )
);
$b->appendChild( $fis );

$dogruluk = $doc->createElement( "dogruluk" );
$dogruluk->appendChild(
$doc->createTextNode( $kayit['dogruluk'] )
);
$b->appendChild( $dogruluk );

$hizlilik = $doc->createElement( "hizlilik" );
$hizlilik->appendChild(
$doc->createTextNode( $kayit['hizlilik'] )
);
$b->appendChild( $hizlilik );

$r->appendChild( $b );

$doc->save("rekor.xml");


//-----------------------------------------------------

/*
$kayitlar = $doc->getElementsByTagName( "kayit" );
//foreach( $kayitlar as $kayit )

$len= sizeof($kayitlar);

$html_duz= array();

$html_duz[]="</table>";
foreach ( $kayitlar as $kayit) {
    $isimler = $kayit->getElementsByTagName( "isim" );
    $isim = $isimler->item(0)->nodeValue;

    $tarihler = $kayit->getElementsByTagName( "tarih" );
    $tarih = $tarihler->item(0)->nodeValue;

    $fisler = $kayit->getElementsByTagName( "fis" );
    $fis = $fisler->item(0)->nodeValue;

    $dogruluklar = $kayit->getElementsByTagName( "dogruluk" );
    $dogruluk = $dogruluklar->item(0)->nodeValue;

    $hizliliklar = $kayit->getElementsByTagName( "hizlilik" );
    $hizlilik = $hizliliklar->item(0)->nodeValue;
    $html_duz[] ="<tr><td>$isim</td><td>$tarih</td><td>$fis</td><td>$dogruluk</td><td>$hizlilik</td></tr>";
}
$html_duz[] ="<tr><th>Isim</th><th>Tarih</th><th>Fis No</th><th>Dogrluk</th><th>Hizlilik</th></tr>";
$html_duz[] ="<table border=1>";

$html=array_reverse($html_duz);
foreach ($html as $html_satir)echo $html_satir;
*/

?>