const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;    // Auto Switch
const intervalTime = 4000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');    // Get Current Class
    current.classList.remove('current');   // removing current class from the current slide

    // Check for Next Slide
    if (current.nextElementSibling) {
        // Add Current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add Current to the First Node 'slide'
        slides[0].classList.add('current');
    }

};

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');

    if (current.previousElementSibling) {
        
        current.previousElementSibling.classList.add('current');
    } else {
        // Add Current to the Last Node 'slide'
        slides[slides.length - 1].classList.add('current');
    }

};

next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        slideInterval = setInterval(nextSlide, intervalTime);
        clearInterval(slideInterval);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        slideInterval = setInterval(nextSlide, intervalTime);
        clearInterval(slideInterval);
    }
});

if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}
