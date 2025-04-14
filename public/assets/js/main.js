$(document).ready(function () {
  $(".ct_menu_bar").click(function () {
    $(".ct_nav_menu").addClass("ct_menu_show");
  });
  $(".ct_close_bar").click(function () {
    $(".ct_nav_menu").removeClass("ct_menu_show");
  });

  $(window).on("load", function () {
    $(".ct_loader_main").fadeOut();
  });
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 200) {
      //clearHeader, not clearheader - caps H
      $("header").addClass("ct_sticky_menu");
    } else {
      $("header").removeClass("ct_sticky_menu");
    }
  }); //missing );
  const swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    speed: 2500,
    autoplay: {
      delay: 0, // Auto slide every 2 seconds
      disableOnInteraction: false, // Keep autoplay running even when user interacts
    },
    freeMode: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      1400: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  });
  const swiper2 = new Swiper(".mySwiper2", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    speed: 3500,

    autoplay: {
      delay: 0, // Auto slide every 2 seconds
      disableOnInteraction: false, // Keep autoplay running even when user interacts
    },
    freeMode: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      1400: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  });

  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;

  setProgressBar(current);

  $(".ct_form_next").click(function () {
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //Add Class Active
    $("#ct_form_progressbar li")
      .eq($("fieldset").index(next_fs))
      .addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          next_fs.css({ opacity: opacity });
        },
        duration: 500,
      }
    );
    setProgressBar(++current);
  });

  $(".previous").click(function () {
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    $("#ct_form_progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          previous_fs.css({ opacity: opacity });
        },
        duration: 500,
      }
    );
    setProgressBar(--current);
  });

  function setProgressBar(curStep) {
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar").css("width", percent + "%");
  }

  $(".submit").click(function () {
    return false;
  });
  AOS.init();
});
