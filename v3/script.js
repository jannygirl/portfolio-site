
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    gallery.style.display = 'block'
    galleryCloseBtn.style.display = 'block'
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // var i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");
    // let numberText = document.getElementsByClassName('numbertext')
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    } for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // numberText[0].innerText = `${n} / 4`
    // dots[slideIndex - 1].className += " active";
    // captionText.innerHTML = dots[slideIndex - 1].alt;
}

const cards = document.querySelectorAll('.p__card')
const close = document.querySelector('.close')
// const prevBtn = document.querySelector('.prev')
// const nextBtn = document.querySelector('.next')
const gallery = document.querySelector('#gallery')
const galleryCloseBtn = document.querySelector('.content__close')



for (let i = 0; i < cards.length; i++) {
    i = 0
    const element = cards[i];
    element.addEventListener('click', (e) => {
        i++
        gallery.style.display = 'none'
        galleryCloseBtn.style.display = 'none'
        openModal()
        currentSlide(i)
    })
}

close.addEventListener('click', closeModal)
// prevBtn.addEventListener('click', () => {
//     plusSlides(-1)
// })
// nextBtn.addEventListener('click', () => {
//     plusSlides(1)
// })




