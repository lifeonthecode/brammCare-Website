
const headerSlideContainer = new Splide('.header_slide_container', {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    arrows: false,
    pagination: false,
    perPage: 4,
    padding: "1.5rem",
    breakpoints: {

        1024: { perPage: 3, padding: "1rem", },
        768: { perPage: 2, padding: "0rem", },
        400: { perPage: 1, padding: "3rem", },
    }
});

headerSlideContainer.mount();

const chagaMushroomSlider = new Splide('.chaga-mushroom-slider', {
    // type: 'loop',    
    // autoplay: true,      
    // interval: 3000,       
    pauseOnHover: true,
    arrows: true,
    pagination: false,
    perPage: 1,
    // padding: { right: "1.5rem"},
    breakpoints: {

        // 1024: {perPage: 3, padding: "1rem",},
        // 768: {perPage: 2, padding: "0rem",},
        768: { perPage: 1, padding: { right: "2rem" }, gap: "10px" },
        400: { perPage: 1, padding: { right: "2rem" }, gap: "10px" },
    }
});

chagaMushroomSlider.mount();

const ourCustomerReviewsSlide = new Splide('.our-customer-reviews-slide', {
    type: 'loop',
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    arrows: false,
    pagination: false,
    gap: "23px",
    perPage: 3,
    // padding: { right: "1.5rem"},
    breakpoints: {

        1024: {perPage: 2},
        768: {
            perPage: 1,
            padding: "2rem",
            gap: "10px",
            pagination: true,
        },
        400: {
            perPage: 1,
            padding: "2rem",
            gap: "10px",
            pagination: true,
        },
    }
});

ourCustomerReviewsSlide.mount();



const brandSlideContainer = new Splide('.brand-slide-container', {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    arrows: false,
    pagination: false,
    perPage: 8,
    gap: "22px",
    padding: "4rem",
    breakpoints: {

        1024: { perPage: 4, padding: "1rem", },
        768: { perPage: 1, padding: "0rem", },
        400: { perPage: 1, padding: "3rem", },
    }
});

brandSlideContainer.mount();


const promotionSlideContainer = new Splide('.promotion-slide-container', {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    arrows: false,
    pagination: false,
    perPage: 8,
    gap: "22px",
    padding: "4rem",
    breakpoints: {

        1024: { perPage: 4, padding: "1rem", },
        768: { perPage: 1, padding: "0rem", },
        400: { perPage: 1, padding: "3rem", },
    }
});

promotionSlideContainer.mount();


const yourBodyChagaSlide = new Splide('.your-body-chaga-slide', {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    arrows: false,
    pagination: false,
    perPage: 3,
    gap: "22px",
     breakpoints: {

        1024: {perPage: 2},
        768: {
            perPage: 1,
            padding: "2rem",
            gap: "10px",
            pagination: true,
        },
        400: {
            perPage: 1,
            padding: "2rem",
            gap: "10px",
            pagination: true,
        },
    }
});

yourBodyChagaSlide.mount();

const dailyRoutineSlide = new Splide('.daily-routine-slide', {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    arrows: false,
    pagination: false,
    perPage: 3,
    gap: "22px",
     breakpoints: {

        1024: {perPage: 2},
        768: {
            perPage: 1,
            padding: "2rem",
            gap: "10px",
            pagination: true,
        },
        400: {
            perPage: 1,
            padding: "2rem",
            gap: "10px",
            pagination: true,
        },
    }
});

dailyRoutineSlide.mount();


const storiesSlideContainer = new Splide('.stories-slide-container', {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    arrows: false,
    pagination: false,
    perPage: 3,
    gap: "22px",
     breakpoints: {

        1024: {perPage: 2},
        768: {
            perPage: 1,
            padding: "2rem",
            gap: "10px",
            pagination: true,
        },
        400: {
            perPage: 1,
            padding: "2rem",
            gap: "10px",
            pagination: true,
        },
    }
});

storiesSlideContainer.mount();


const currentYear = document.getElementById('currentYear');
let date = new Date();
date = date.getFullYear();
currentYear.textContent = date;