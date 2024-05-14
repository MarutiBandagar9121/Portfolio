const typingText = Typify("#auto-text", {
  text: ["Developer !", "FrontEnd Developer !", "BackEnd Developer !"],
  delay: 100,
  loop: true,
  cursor: true,
  stringDelay: 1000,
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
});
