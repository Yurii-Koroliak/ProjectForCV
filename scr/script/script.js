const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('phone-menu');

burger.addEventListener('click', () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "block" ? "none" : "block";
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

  // Показываем текущий
    slides[slideIndex - 1].style.display = "flex";
}




function slideShow(){
    let slides = document.getElementsByClassName('mySlide');


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    slideIndex++;
    //тут мы просто к переменной slideIndex прибавляем 1 (если было 0 то стало 1 и тд)

    setTimeout(slideShow, 5000);


    if (slideIndex > slides.length) {
      slideIndex = 1;
    }  
    //тут мы сказали что если slideIndex становится больше длины масива мы возвращаем его к значению 1


    slides[slideIndex - 1].style.display = "flex";
    //показываем один слайд из массива (даем ему display flex)
    //slideIndex - 1 потому что индексация в масиве начинается с 0 и если у нас slideIndex равняется 1 то надо отнять 1 что бы показать именно первый обэкт в масиве

}

let slideIndex = 0;
slideShow();