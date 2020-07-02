(function ($) {
  "use strict"; // Start of use stric

  //AOS
  AOS.init({
    offset: 100,
    disable: function () {
      var maxWidth = 500;
      return window.innerWidth < maxWidth;
    },
  });

  //Smooth scroll
  $("body").scrollspy({
    target: "#navbar",
    offset: 74,
  });
  navbarCollapse();
  //Collapse navlink when clicked
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Scroll Top Button default hide
  $("#scroll-top").fadeOut();

  //  Scroll Top Button actions
  $(window).scroll(navbarCollapse);
  $(window).scroll(function () {
    console.log($(this).scrollTop(), $(this).width());
    if ($(this).scrollTop() > 50 && $(this).width() < 1440) {
      $("#scroll-top").fadeIn();
    } else {
      $("#scroll-top").fadeOut();
    }
  });
  // scroll body to 0px when it's click
  $("#scroll-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
})(jQuery);

$(window).load(function () {});
