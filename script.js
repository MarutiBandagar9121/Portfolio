const typingText = Typify("#auto-text", {
  text: ["Web Developer!","Digital Dreamer","Code Creator"],
  delay: 100,
  loop: true,
  cursor: true,
  stringDelay: 700,
});


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

$(document).ready(function () {
  $(".dropdown-menu-content").hide();
  $(".dropdown-menu-btn i").click(function () {
    // $(".dropdown-menu-content").css('display','flex');
    $(".dropdown-menu-content").toggle();
  });

  $(".dropdown-menu-content a").click(function () {
    $(".dropdown-menu-content").toggle();
  });

  

// $('.xxx').slick({
//   slidesToShow: 1,
//   slidesToScroll:1,
//   dots: true,
//   infinite: true,
//   speed: 300,
//   centerMode: false,
//   variableWidth: true,
//   // autoplay:true,
//   // autoplaySpeed: 1000,
//   draggable:true,
//   prevArrow:'<i class="fa-solid fa-circle-chevron-left fa-lg prev-button" style="color: #000000;"></i>',
//   nextArrow:'<i class="fa-solid fa-circle-chevron-right fa-lg next-button" style="color: #000000;"></i>',
// });
$(".owl-carousel").owlCarousel({
 
  items:1,
  margin:40,
  loop:true,
  autoplay:true,
  autoplayTimeout:2000,
  dots:true,
  autoplayHoverPause:true
});
});
