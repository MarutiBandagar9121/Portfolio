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

  

$('.skills-parent-container').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplay:true,
  autoplaySpeed: 1000,
  draggable:true,
  prevArrow:'<i class="fa-solid fa-circle-chevron-left fa-lg prev-button" style="color: #000000;"></i>',
  nextArrow:'<i class="fa-solid fa-circle-chevron-right fa-lg next-button" style="color: #000000;"></i>'
});
});
