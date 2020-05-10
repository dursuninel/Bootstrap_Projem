
 let kalan_urun = document.querySelector("#kalan_urun").textContent; //  Ürünün kaç adet kaldığını alıyorum.
 //console.log(kalan_urun);

function arttir() {
    var deger = parseInt(document.getElementById('sayi').value);
    if (deger<kalan_urun) // Sayının kalan ürün sayısı kadar artabileceğini ayarlıyorum.
   document.getElementById('sayi').value = deger + 1;
}

function azalt() {
   var deger = parseInt(document.getElementById('sayi').value);
   if (deger!=1) // alınacak ürün miktarının 1 den az olmamasını sağlıyorum.
   document.getElementById('sayi').value = deger - 1;
}


btn1.onclick=function(){
    this.style.background="#0069d9";
    this.style.color="#ffffff";
    btn2.style.background="#ffffff";
    btn2.style.color="#000000";
    btn3.style.background="#ffffff";
    btn3.style.color="#000000";
}
btn2.onclick=function(){
    this.style.background="#0069d9";
    this.style.color="#ffffff";
    btn1.style.background="#ffffff";
    btn1.style.color="#000000";
    btn3.style.background="#ffffff";
    btn3.style.color="#000000";
}
btn3.onclick=function(){
    this.style.background="#0069d9";
    this.style.color="#ffffff";
    btn1.style.background="#ffffff";
    btn1.style.color="#000000";
    btn2.style.background="#ffffff";
    btn2.style.color="#000000";
}

var demo;
let yeni = document.querySelector("#yorumlar");
let yeni1 = document.querySelector("#div");

var ad;
var soyad;
var yorum;
let resimler = ["images/kul1.png","images/kul2.png","images/kul3.png","images/kul4.png","images/kul6.png","images/kul7.jpg","images/kul8.png","images/kul9.png","images/kul10.png"]
var rastgele;
var resim;

gonder.onclick=function()
{
    
    ad = document.querySelector("#ad").value;
    soyad = document.querySelector("#soyad").value;
    yorum = document.querySelector("#yorum").value;

    

    let newyorum = document.createElement("div");
    let img = document.createElement("img");
    let icerik = document.createElement("div");
    let isimsoyisim = document.createElement("h5");
    let isimsoyisim1 = document.createTextNode(ad +" "+ soyad);
    let yorum1 = document.createTextNode(yorum);
    let ayrac = document.createElement("hr");

    newyorum.className="media mt-2";
    rastgele =  Math.floor(Math.random() * resimler.length);
    resim = resimler[rastgele];
    img.src = resim;
    img.width="64";
    img.height="64";
    img.className="mr-3";
    icerik.className="media-body";
    newyorum.appendChild(img);
    newyorum.appendChild(icerik);
    isimsoyisim.className="mt-0";
    isimsoyisim.appendChild(isimsoyisim1);
    icerik.appendChild(isimsoyisim);
    icerik.appendChild(yorum1);

    yeni.insertBefore(ayrac,yeni.childNodes[0]);
    yeni.insertBefore(newyorum,yeni.childNodes[0]);   

}
