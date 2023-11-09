lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })

  function myfunction(){
    var btn =document.getElementById("mobile-menu");
    if (btn.style.display === "block") {
        btn.style.display = "none";
      } else {
        btn.style.display = "block";
      }
}


$(document).ready(function(){
 
  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
  });
      
  });
const plus = document.querySelector('.plus'),
    minus = document.querySelector('.minus'),
    num = document.querySelector('.num');

    let a=1;

    plus.addEventListener("click", ()=>{
      a++;
      a=(a < 10) ? "0" + a : a;
      num.innerText = a;
    });
    minus.addEventListener("click", ()=>{
      a--;
      a=(a < 10) ? "0" + a : a;
      num.innerText = a;
    });
  

