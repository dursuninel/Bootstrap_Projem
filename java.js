
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
console.log(window.scrollTo);

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

window.smoothScroll = function (target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function (c, a, b, i) {
        i++;
        if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () {
            scroll(c, a, b, i);
        }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

var demo;
let yeni = document.querySelector("#yorumlar");

var ad;
var soyad;
var yorum;
let resimler = ["../images/kul1.png","../images/kul2.png","../images/kul3.png","../images/kul4.png","../images/kul6.png","../images/kul7.jpg","../images/kul8.png","../images/kul9.png","../images/kul10.png"]
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