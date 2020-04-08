$(window).on("load", function() {

  $(".loader .inner").fadeOut(500, function() {
    $(".loader").fadeOut(600);
  });

  $(".items").isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });

});

$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });

  const typed = new Typed(".typed", {
    strings: ['Software Engineer', 'Web Developer', 'Student'],
     typeSpeed: 70,
     loop: true,
     startDelay: 1000,
     showCursor: false
  });

  var owl = $('.owl-carousel');
  owl.owlCarousel({
      loop:true,
      items: 4,
      autoplay: true,
      autoplayTimeout: 1750,
      autoplayHoverPause: false,
      responsive:{
          0:{
              items:1
          },
          480:{
              items:3
          },
          768:{
              items:5
          },
          938:{
              items:6
          }
      }
  });
  // owl.on('mousewheel', '.owl-stage', function (e) {
  //     if (e.deltaY>0) {
  //         owl.trigger('next.owl');
  //     } else {
  //         owl.trigger('prev.owl');
  //     }
  //     e.preventDefault();
  // });

  const statsTopOffset = $(".statsSection").offset().top;
  let countUpFinished = false;

  $(window).scroll(function() {

    if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
      $(".counter").each(function() {
        let element = $(this);
        let endVal = parseInt(element.text());

        element.countup(endVal);
      })
      countUpFinished = true;
    }
  });

  $("[data-fancybox]").fancybox();

  $("#filters a").click(function() {

    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    let selector = $(this).attr("data-filter");

    $(".items").isotope({
        filter: selector,
        animationOptions: {
          duration: 1500,
          easing: 'linear',
          queue: false
        }
    });

    return false;
  });

  $("#navigation li a").click(function(e) {
    e.preventDefault();

    let targetElement = $(this).attr("href");
    let targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow")
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {

    const body = $("body");

    if($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }

  };

});
