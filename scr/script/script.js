const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('phone-menu');

burger.addEventListener('click', () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "block" ? "none" : "block";
});



document.querySelector('.dropdown__button').addEventListener('click', function() {
  this.parentElement.classList.toggle('active');
});

document.querySelectorAll('.footer-main-item').forEach(item => {
  const dropdown = item.querySelector('.footer-main-item-dropdown');
  const span = item.querySelectorAll('.footer-main-item-span');

  dropdown.addEventListener('click', () => {
    span.forEach(span => span.classList.toggle('active'));
  });
});


function plusSlides(n) {

    slideIndex += n;

    let slides = document.getElementsByClassName('mySlide');

    if (slideIndex > slides.length) {
        slideIndex = 1
    };
    if (slideIndex < 1) {
        slideIndex = slides.length
    };

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
}




function slideShow(){
  let slides = document.getElementsByClassName('mySlide');


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }


  slideIndex++;

  setTimeout(slideShow, 5000);


  if (slideIndex > slides.length) {
    slideIndex = 1;
  }  


  slides[slideIndex - 1].style.display = "flex";

}

let slideIndex = 0;
slideShow();