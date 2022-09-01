$(document).ready(function () {
  var $randomnbr = $(".nbr");
  var $timer = 30;
  var $it;
  var $data = 0;
  var index;
  var change;

  var letters = [
    "H",
    "i",
    "_",
    "I",
    "'",
    "m",
    "_",
    "D",
    "a",
    "n",
    "y",
    "a",
    "_",
    "a",
    "_",
    "w",
    "e",
    "b",
    "_",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  $randomnbr.each(function () {
    change = Math.round(Math.random() * 100);
    $(this).attr("data-change", change);
  });

  function random() {
    return Math.round(Math.random() * 9);
  }

  function select() {
    return Math.round(Math.random() * $randomnbr.length + 1);
  }

  function value() {
    $(".nbr:nth-child(" + select() + ")").html("" + random() + "");
    $(".nbr:nth-child(" + select() + ")").attr("data-number", $data);
    $data++;

    $randomnbr.each(function () {
      if (
        parseInt($(this).attr("data-number")) >
        parseInt($(this).attr("data-change"))
      ) {
        index = $(".ltr").index(this);
        $(this).html(letters[index]);
        $(this).removeClass("nbr");
      }
    });
  }

  setTimeout(() => {
    $it = setInterval(value, $timer);
  }, 2650);

  var header = $(".header"),
    introH = $(".intro").innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH / 2) {
      header.addClass("__fixed");
    } else {
      header.removeClass("__fixed");
    }
  }

  $(".intro__arrow-btn").on("click", function (event) {
    event.preventDefault();

    var blockOffset = $(".works").offset().top;

    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      600
    );
  });
});

const animItems = document.querySelectorAll(".__anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("__active");
      } else {
        if (!animItem.classList.contains("__anim-no-hide")) {
          animItem.classList.remove("__active");
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}