//   <!-- Initialize Swiper -->

const mainSwiper = new Swiper('.main-banner', {
    loop: true,
    speed: 600,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const promSwiper = new Swiper('.prom-banner', {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const bestSwiper = new Swiper('.best-banner', {
    slidesPerView: 4,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const timesaleSwiper = new Swiper('.timesale-banner', {
    slidesPerView: 'auto',
    spaceBetween: 60,
});

const packSwiper = new Swiper('.pack-banner', {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
