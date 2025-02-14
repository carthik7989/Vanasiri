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
  loop: false,

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
      updateNavButtons(this);
    },
    slideChange: function () {
      updateSlideText(this.realIndex);
      updateNavButtons(this);
    },
  },

});

function updateSlideText(index) {
  const slideText = document.querySelector(".slide-text");
  slideText.textContent = slideTexts[index];
}

function updateNavButtons(swiper) {
  const mainButtonPrev = document.querySelector('.main-swiper-button-prev');
const mainButtonNext = document.querySelector('.main-swiper-button-next');
  mainButtonPrev.disabled = swiper.isBeginning;
  mainButtonNext.disabled = swiper.isEnd;
}

const innerSwiper1 = new Swiper(".inner-swiper-1", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  // grabCursor: true,
  nested: true,
  noSwiping: false,
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
  spaceBetween: 100,
  centeredSlides: true,
  nested:true,
  initialSlide: 1,
  navigation: {
    nextEl: ".swiper2-button-next",
    prevEl: ".swiper2-button-prev",
  },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //   },
  //   1024: {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //   },
  // },
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

const innerSwiper4 = new Swiper(".inner-swiper-4", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween:20,
  navigation: {
    nextEl: ".swiper4-button-next",
    prevEl: ".swiper4-button-prev",
  },
  nested: true,
  noSwiping: false,
  on: {
    touchStart: function (swiper, event) {
      event.stopPropagation();
    },
  },
});

const verticalSwiper = new Swiper(".vertical-swiper", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
   nested:true,
});

   // Video popup functionality
   const playButton = document.querySelector('.play-button');
   const videoPopup = document.querySelector('.video-popup');
   const closeVideoButton = document.querySelector('.close-video');
   const videoFrame = document.querySelector('#video-frame');

   playButton.addEventListener('click', () => {
       const videoUrl = playButton.dataset.videoUrl;
       videoFrame.src = videoUrl;
       videoPopup.classList.remove('hidden');
       document.body.style.overflow = 'hidden'; // Prevent scrolling
   });

   closeVideoButton.addEventListener('click', () => {
       videoFrame.src = ''; // Stop video playback
       videoPopup.classList.add('hidden');
       document.body.style.overflow = ''; // Restore scrolling
   });

   // Close video popup when clicking outside the video
   videoPopup.addEventListener('click', (e) => {
       if (e.target === videoPopup) {
           closeVideoButton.click();
       }
   });

   // Close video popup on escape key
   document.addEventListener('keydown', (e) => {
       if (e.key === 'Escape' && !videoPopup.classList.contains('hidden')) {
           closeVideoButton.click();
       }
   });

  // Function to handle scroll on Swiper slides
function handleScroll(e) {
  const slide = e.target;
  const currentScrollPosition = slide.scrollTop;
  const downArrow = slide.querySelector('.down-arrow');
  
  if (downArrow) {
      // Show button only when at the top (scrollTop is 0)
      if (currentScrollPosition === 0) {
          downArrow.style.opacity = '1';
          downArrow.style.pointerEvents = 'auto';
      } else {
          downArrow.style.opacity = '0';
          downArrow.style.pointerEvents = 'none';
      }
  }
}

// Function to add click handler to down arrow
function addDownArrowClickHandler(arrow) {
  arrow.addEventListener('click', () => {
      const slide = arrow.closest('.swiper-slide');
      if (slide) {
          slide.scrollBy({
              top: window.innerHeight,
              behavior: 'smooth'
          });
      }
  });
}

// Function to initialize down arrows
function initializeDownArrows() {
  // Add scroll event listeners to all swiper slides
  document.querySelectorAll('.swiper-slide').forEach(slide => {
      slide.addEventListener('scroll', handleScroll);
      
      // Initialize the arrow state
      const downArrow = slide.querySelector('.down-arrow');
      if (downArrow) {
          // Set initial state
          if (slide.scrollTop === 0) {
              downArrow.style.opacity = '1';
              downArrow.style.pointerEvents = 'auto';
          } else {
              downArrow.style.opacity = '0';
              downArrow.style.pointerEvents = 'none';
          }
          // Add click handler
          addDownArrowClickHandler(downArrow);
      }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeDownArrows);

// Also initialize when Swiper changes slides
mainSwiper.on('slideChange', () => {
  setTimeout(initializeDownArrows, 100); // Small delay to ensure DOM is updated
});
