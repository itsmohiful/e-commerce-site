function openmenu()
      {
          document.getElementById("side-menu").style.display="block";
          document.getElementById("menu-btn").style.display="none";
          document.getElementById("close-btn").style.display="block";
      }
function closemenu()
    {
        document.getElementById("side-menu").style.display="none";
        document.getElementById("menu-btn").style.display="block";
        document.getElementById("close-btn").style.display="none";
    }


    $('.slide-2').slick({
        centerMode: true,
        centerPadding: '60px',
        autoplaySpeed: 1500,
        autoplay:true,
        prevArrow:".slide-two .slide-btn .prev",
        nextArrow:".slide-two .slide-btn .next",
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });