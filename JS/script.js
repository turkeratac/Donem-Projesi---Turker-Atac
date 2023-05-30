
/* ÇARK BAŞLANGIÇ */
document.addEventListener('DOMContentLoaded', function() {
    var wheel = document.querySelector('.wheel');
    var segments = wheel.querySelectorAll('.segment');
    var segmentCount = segments.length;
  
    var deg = 360 / segmentCount;
  
    for (var i = 0; i < segmentCount; i++) {
      segments[i].style.transform = 'rotate(' + (i * deg) + 'deg)';
    }
  });
  
  function spinWheel() {
    var wheel = document.querySelector('.wheel');
    var segments = wheel.querySelectorAll('.segment');
    var segmentCount = segments.length;
  
    var randomSegment = Math.floor(Math.random() * segmentCount);
  
    var deg = 360 * 5 + randomSegment * (360 / segmentCount);
  
    wheel.style.transform = 'rotate(' + deg + 'deg)';
    
    var resultSegment = (segmentCount - randomSegment) % segmentCount; // İstenilen sonuç segmenti hesaplanıyor
    
    setTimeout(function() {
      wheel.style.transitionDuration = '0s'; // Animasyon süresini sıfıra ayarla
      wheel.style.transform = 'rotate(' + deg + 'deg)'; // Dönüş sonucunda durması gereken konum
      setTimeout(function() {
        wheel.style.transitionDuration = ''; // Animasyon süresini boş bırakarak varsayılan süreye döndür
        alert('Şanslı Yemeğiniz: ' + segments[resultSegment].id);
        wheel.style.transform = 'rotate(0deg)'; // Çarkı başlangıç konumuna sıfırla
      }, 100); // Alert penceresi gösterildikten sonra 3 saniye bekle
    }, 3000);
  }
/* ÇARK BİTİŞ */

/* SİYAH EKRAN BAŞLANGIÇ */
setTimeout(function() {
  document.getElementById("black-overlay").style.opacity = 0;
  // Siyah katman tamamen kaybolduktan sonra tıklama işlevselliğini etkinleştir
  setTimeout(function() {
    document.getElementById("black-overlay").style.display = "none";
  }, 1000);
}, 4000);
/* SİYAH EKRAN BİTİŞ */


/* ÇARK AÇ-KAPA BAŞLANGIÇ */

$(document).ready(function(){
  $("#slidetoggle").click(function(){
      $(".cark-ve-buton").slideToggle(1500);
  })
})

/* ÇARK AÇ-KAPA BİTİŞ */

/* MENÜ ANİMASYONU BAŞLANGIÇ */
$(document).ready(function()
{
  $(".sube-ul").each(function(i,e)
  {
    $(e).children("li").each(function(j, el) 
    {
      $(el).css(
      {
      "animation-duration": 500+"ms",
      "animation-delay": 100*j+"ms"
      });
    });
  });
});
/* MENÜ ANİMASYONU BİTİŞ */


/* SLIDER BAŞLANGIÇ */

jQuery(document).ready(function ($) {

  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('#slider').css({ width: slideWidth, height: slideHeight });
  
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    
/* SLIDER BİTİŞ */

/* 150 KELİME SINIRI BAŞLANGIÇ */
function limitKelimeSayisi(event) {
  const metinKutusu = event.target;
  const metin = metinKutusu.value;
  const kelimeSayisi = metin.split(' ').filter((kelime) => kelime !== '').length;

  if (kelimeSayisi > 150) {
    metinKutusu.value = metin.split(' ').slice(0, 150).join(' ');
    alert('Maksimum 150 kelime girebilirsiniz!');
  }

  document.getElementById('kelime-sayisi').textContent = kelimeSayisi + ' kelime girdiniz.';
}
/* 150 KELİME SINIRI BİTİŞ */
