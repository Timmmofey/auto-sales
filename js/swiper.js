const swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    effect: "fade",
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        clickable: true,
    },

});