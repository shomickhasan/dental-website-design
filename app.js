jQuery(document).ready(function () {
  // responsive nav
  $(window).resize(function () {
    var _width = jQuery("body").width();
    if (_width < 768) {
      jQuery(".menu-items").hide();
      jQuery(".menu-cta").hide();
      jQuery(".menu-bar").show();
      //dd menu
      jQuery(".dd-menu-bar").show();
      jQuery(".nav-items").hide();
      jQuery(".dd-menu-cta").hide();
      jQuery(".cart-wrapper").hide();
    } else {
      jQuery(".menu-items").show();
      jQuery(".menu-cta").show();
      jQuery(".menu-bar").hide();
      //dd menu
      jQuery(".dd-menu-bar").hide();
      jQuery(".nav-items").show();
      jQuery(".dd-menu-cta").show();
      jQuery(".cart-wrapper").show();
      jQuery(".nav-items ul ul").hide();
    }
  });
  jQuery("#bar").click(function () {
    jQuery(".menu-items").slideDown();
    // jQuery(".menu-items").children("ul").removeClass("list-inline");
    jQuery(".menu-cta").slideDown();
    jQuery("#bar").hide();
    jQuery("#close").show();
    return false;
  });
  jQuery("#close").click(function () {
    jQuery(".menu-items").slideUp();
    jQuery(".menu-cta").slideUp();
    jQuery("#close").hide();
    jQuery("#bar").show();
    return false;
  });

  //dd menu
  jQuery(".nav-items ul li").click(function () {
    // jQuery(".nav-items ul ul").slideUp();
    jQuery(this).children("ul").slideToggle(1000);
    return false;
  });
  jQuery(".nav-items ul ul").mouseleave(function () {
    jQuery(this).slideUp(1000);
  });
  // experiment
  $(document).on("click", function (event) {
    var $trigger = $(".nav-items ul ul");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      $(".nav-items ul ul").slideUp(1000);
    }
  });
  jQuery("#dd-bar").click(function () {
    jQuery(".nav-items").slideDown();
    jQuery(".dd-menu-cta").slideDown();
    jQuery(".cart-wrapper").slideDown();
    jQuery("#dd-bar").hide();
    jQuery("#dd-close").show();
    return false;
  });
  jQuery("#dd-close").click(function () {
    jQuery(".nav-items").slideUp();
    jQuery(".dd-menu-cta").slideUp();
    jQuery(".cart-wrapper").slideUp();
    jQuery("#dd-close").hide();
    jQuery("#dd-bar").show();
    return false;
  });

  // header slider
  var slider = tns({
    container: ".my-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    autoplayButtonOutput: false,
    controlsPosition: "bottom",
    navPosition: "bottom",
    controlsContainer: ".myControls",
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // client slider
  var slider = tns({
    container: ".client-slider",
    items: 4,
    slideBy: 1,
    gutter: 20,
    controlsPosition: "bottom",
    navPosition: "bottom",
    controlsContainer: ".sliderControls",
    autoplayButtonOutput: false,
    nav: false,
    speed: 1000,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      675: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  jQuery(".prev").hover(function () {
    jQuery(this).toggleClass("active-control");
  });
  jQuery(".next").hover(function () {
    jQuery(this).toggleClass("active-control");
  });
});
