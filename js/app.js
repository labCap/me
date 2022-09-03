$(document).ready(function () {
  let $randomnbr = $(".nbr");
  let $timer = 30;
  let $it;
  let $data = 0;
  let index;
  let change;

  let letters = [
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

  let header = $(".header"),
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
        animItem.classList.add("__active-anim");
      } else {
        if (!animItem.classList.contains("__anim-no-hide")) {
          animItem.classList.remove("__active-anim");
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
const history = {
  item: document.querySelector(".history"),
  btn: document.querySelector(".history-btn"),
  title: document.querySelector(".about-me__title-history"),
};

const plans = {
  item: document.querySelector(".plans"),
  btn: document.querySelector(".plans-btn"),
  title: document.querySelector(".about-me__title-plans"),
};

const cat = [
  "img/cat.gif",
  "img/sticker.gif",
  "img/sticker1.gif",
  "img/sticker2.gif",
  "img/sticker3.gif",
];
const catText = ["miu😺", "fr-fr", "mrrr"];

const wrapper = document.querySelector(".wrapper");

tabsShow(
  history.btn,
  plans.btn,
  history.item,
  plans.item,
  history.title,
  plans.title
);
tabsShow(
  plans.btn,
  history.btn,
  plans.item,
  history.item,
  plans.title,
  history.title
);

function tabsShow(
  btnAddClass,
  btnRemoveClass,
  tabAddClass,
  tabRemoveClass,
  titleAddClass,
  titleRemoveClass
) {
  btnAddClass.addEventListener("click", () => {
    tabAddClass.classList.toggle("__active");
    tabRemoveClass.classList.remove("__active");

    btnAddClass.classList.toggle("__active");
    btnRemoveClass.classList.remove("__active");

    btnAddClass.classList.toggle("glitched");
    btnRemoveClass.classList.remove("glitched");
  });
}

let input = document.querySelectorAll("input");
let footerBtn = document.querySelector(".footer__btn");

for (let i = 0; i < input.length; i++) {
  const thisInput = input[i];
  let catsMax = 0;
  footerBtn.addEventListener("click", () => {
    if (thisInput.value === "cat") {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <div class="cat-img" 
        style="
          z-index:100000;
          cursor:pointer;
          position: absolute;
          width: 60px;
          height: 60px;
          left: ${Math.floor(Math.random() * wrapper.offsetWidth - 100)}px;
          top: ${Math.floor(Math.random() * wrapper.offsetHeight)}px;
        ">
          <img src="${cat[Math.floor(Math.random() * cat.length)]}" alt="" >
        </div>
          
          `
      );

      catsMax++;
      console.log(catsMax);

      let catImg = document.querySelectorAll(".cat-img");
      for (let i = 0; i < catImg.length; i++) {
        const thisCatImg = catImg[i];

        thisCatImg.addEventListener("click", () => {
          thisCatImg.innerHTML = `
          ${catText[Math.floor(Math.random() * catText.length)]}
          `;

          setTimeout(() => {
            thisCatImg.remove();
            if (catImg.length <= 1) {
              infoPopUp.style.cssText = `
              border-color: rgb(${R}, ${G}, ${B});
              background: rgba(${R}, ${G}, ${B}, .3 );
              padding: 20px;
              width:auto;
              height:auto;
              `;
              infoPopUp.classList.add("__active");
              infoPopUp.innerText = `Cats found 
              ${catsMax}`;
              setTimeout(() => {
                infoPopUp.classList.remove("__active");
              }, 3000);
            }
          }, 3000);
        });
      }
    }
  });
}

let R = Math.floor(Math.random() * 255);
let G = Math.floor(Math.random() * 255);
let B = Math.floor(Math.random() * 255);
let infoPopUp = document.querySelector(".info-pop-up");
let logo = document.querySelector(".logo");

let numberLogo = 5;

function createLogo() {
  for (let i = 0; i < numberLogo; i++) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
    <div class="mini-logo">
        <ico class="ico-logo"></ico>
      </div>
      `
    );
  }

  let miniLogo = document.querySelectorAll(".mini-logo");
  let scoreMiniLogo = 0;
  for (let i = 0; i < miniLogo.length; i++) {
    const thisMiniLogo = miniLogo[i];

    thisMiniLogo.style.cssText = `
    display:block;
      left: ${Math.floor(Math.random() * document.body.offsetWidth)}px;
      top: ${Math.floor(Math.random() * wrapper.offsetHeight)}px;
      transform: rotate(${Math.floor(Math.random() * 360)}deg);
      color: rgba(
      ${Math.floor(Math.random() * 255)}, 
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)}, 1 );
    
`;

    thisMiniLogo.addEventListener("click", () => {
      thisMiniLogo.innerHTML = `+1`;

      scoreMiniLogo++;

      infoPopUp.style.cssText = `
      border-color: rgb(${R}, ${G}, ${B});
      background: rgba(${R}, ${G}, ${B}, .3 );
      `;
      infoPopUp.classList.add("__active");
      infoPopUp.innerText = `
      ${scoreMiniLogo}/${miniLogo.length}
      `;

      if (
        scoreMiniLogo == miniLogo.length &&
        scoreMiniLogo % 2 == 0 &&
        scoreMiniLogo % 5 == 0
      ) {
        logo.style.cssText = `transform:rotate(0deg)`;
        scoreMiniLogo = 0;
        numberLogo += 5;
      } else if (
        scoreMiniLogo == miniLogo.length &&
        scoreMiniLogo % 2 != 0 &&
        scoreMiniLogo % 5 == 0
      ) {
        logo.style.cssText = `transform:rotate(180deg)`;
        scoreMiniLogo = 0;
        numberLogo += 5;
      }

      setTimeout(() => {
        infoPopUp.classList.remove("__active");
        thisMiniLogo.remove();
      }, 3000);
    });
  }
}

let logoClick = 0;
logo.addEventListener("click", () => {
  logoClick++;
  console.log(logoClick);
  if (logoClick == 3) {
    logoClick = 0;
    console.log(logoClick);
    createLogo();
  }
});

// setTimeout(createLogo, 5000);
