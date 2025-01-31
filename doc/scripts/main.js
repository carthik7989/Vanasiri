const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const popup = document.querySelector('.popup');
const slideCards = document.querySelectorAll('.slide-card');

    menu.addEventListener('click', () => {
        popup.classList.toggle('hidden');
    });

    close.addEventListener('click', () => {
      popup.classList.add('hidden');
  });

    // Add click event listeners to slide cards
    slideCards.forEach(card => {
        card.addEventListener('click', () => {
            const slideIndex = parseInt(card.dataset.slide);
            // Using slideToLoop instead of slideTo for proper loop navigation
            mainSwiper.slideToLoop(slideIndex);
            popup.classList.add('hidden');
        });
    });


const slideTexts = [
  "Slide 1",
  "Slide 2",
  "Slide 3",
  "Slide 4",
  "Slide 5",
  "Slide 6",
  "Slide 7",
  "Slide 8",
  "Slide 9",
  "Slide 10",
  "Slide 11",
];

const mainSwiper = new Swiper(".main-swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".main-swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".main-swiper-button-next",
    prevEl: ".main-swiper-button-prev",
  },
  on: {
    init: function () {
      updateSlideText(this.realIndex);
    },
    slideChange: function () {
      updateSlideText(this.realIndex);
    },
  },
});

function updateSlideText(index) {
  const slideText = document.querySelector(".slide-text");
  slideText.textContent = slideTexts[index];
}

const innerSwiper1 = new Swiper(".inner-swiper-1", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // grabCursor: true,
  nested: true,
  noSwiping: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    touchStart: function (swiper, event) {
      event.stopPropagation();
    },
  },
});

const innerSwiper2 = new Swiper(".inner-swiper-2", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 50,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  nested: true,
  noSwiping: false,
  allowTouchMove: true,
  on: {
    touchStart: function (swiper, event) {
      event.stopPropagation();
    },
  },
});

const innerSwiper3 = new Swiper(".inner-swiper-3", {
  direction: "horizontal",
  slidesPerView: 4,
 
  // grabCursor: true,
  nested: true,
  noSwiping: true,
  
  scrollbar: {
    el: ".custom-swiper-scrollbar",
    hide: false,
  draggable: true,
  },
  on: {
    touchStart: function (swiper, event) {
      event.stopPropagation();
    },
  },
});

var verticalSwiper = new Swiper(".vertical-swiper", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
   nested:true,
});

