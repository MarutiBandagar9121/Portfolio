const typingText = Typify("#auto-text", {
  text: ["Web Developer!","Digital Dreamer!","Code Creator!"],
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

  const cardButtons = document.querySelectorAll('.toggle-button');
  cardButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Find the closest parent with the class 'card'
        const card = this.closest('.card');
        
        // Find the 'card-right' div within that card
        const cardRight = card.querySelector('.card-right');
        
        const allCardRights = document.querySelectorAll('.card-right');
        allCardRights.forEach(right => {
            if (right !== cardRight && right.style.display === 'flex') {
                right.style.display = 'none'; // Hide other card-right divs
                right.closest('.card').style.width = '30%';            }
        });

        // Toggle the display property between 'flex' and 'none'
        if (cardRight.style.display === 'flex') {
            cardRight.style.display = 'none';
            card.style.width='30%';
        } else {
            cardRight.style.display = 'flex';
            card.style.width='fit-content';
        }
    });
});




  $(".dropdown-menu-content").hide();
  $(".dropdown-menu-btn i").click(function () {
    // $(".dropdown-menu-content").css('display','flex');
    $(".dropdown-menu-content").toggle();
  });

  $(".dropdown-menu-content a").click(function () {
    $(".dropdown-menu-content").toggle();
  });
$(".owl-carousel").owlCarousel({
  items:1,
  loop:true,
  autoHeight: true,
  autoplay:true,
  autoplayTimeout:2000,
  dots:true,
  autoplayHoverPause:true,
  nav:true,
  navText: ['<img src="./images/prev-arrow.png" alt="" class="nav-arrow nav-prev">','<img src="./images/prev-arrow.png"alt="" class="nav-arrow nav-next">']
});
});
