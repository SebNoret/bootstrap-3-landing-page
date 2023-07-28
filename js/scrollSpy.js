const ScrollSpy = () => {
  // Scrollspy fluide
  $(function () {
    $("header a").on("click", function (e) {
      e.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top,
        },
        1000,
        function () {
          window.location.hash = hash;
        }
      );
    });
  });
  //btn_top
  $(document).ready(function () {
    $("#btn_up").click(function () {
      $("html").animate({ scrollTop: 0 }, 1000, function () {
        $("#btn_up").fadeOut("500");
      });
    });

    $(document).scroll(function () {
      if ($(document).scrollTop() > 150) {
        $("#btn_up").fadeIn(500);
      } else {
        $("#btn_up").fadeOut(500);
      }
    });
  });
};

export default ScrollSpy;
