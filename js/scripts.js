
// ========================================= 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,

    breakpoints: {
        640: {
            slidesPerView: "auto",
            spaceBetween: 20,
        },
        768: {
            slidesPerView: "auto",
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});