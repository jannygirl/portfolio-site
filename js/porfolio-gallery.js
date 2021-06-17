// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
    gallery.style.display = 'none'
    contentInner.classList.add('projects-container')
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    gallery.style.display = 'block'
    galleryCloseBtn.style.display = 'block'
    footer.style.display = 'flex'
}

let slideIndex

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

const cards = document.querySelectorAll('.p__card')
const close = document.querySelector('.close')
const gallery = document.querySelector('#gallery')
const galleryCloseBtn = document.querySelector('.content__close')
const contentInner = document.querySelector('#container')
const footer = document.querySelector('.footer')

for (let i = 0; i < cards.length; i++) {
    const element = cards[i];
    element.addEventListener('click', (e) => {
        gallery.style.display = 'none'
        galleryCloseBtn.style.display = 'none'
        openModal()
        currentSlide(i + 1)
    })
}

close.addEventListener('click', closeModal)

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})