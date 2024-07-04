new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2,
  spaceBetween: 30,
  limitToOriginalSize: true,
});

const callback = () => {
  alert("Hi!");
};

const redirect = () => {
  alert("Bye!");
};

const button = document.getElementsByClassName("button");
button.addEventListener("click", callback);

const button_redirect = document.getElementsByClassName("contact__link-button");
button.addEventListener("click", redirect);
