console.log("ok");

const HomeBtn = document.getElementById("home_btn");

HomeBtn &&
  HomeBtn.addEventListener("click", () => {
    console.log(window.location.pathname);

    window.location.pathname = "/JS%20homework%205/public/index2.html";
  });

const AboutPathBtn = document.getElementById("go_home");
AboutPathBtn &&
  AboutPathBtn.addEventListener("click", () => {
    window.location.pathname = "/JS%20homework%205/public/index.html";
  });

window.onclick = function (event) {
  if (!event.target.matches("#ul")) {
    var dropdowns = document.getElementsByClassName("li1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

var swiper = new Swiper(".card_slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
