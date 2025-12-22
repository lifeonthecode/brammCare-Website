
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
  
        1024: {perPage: 3, padding: "1rem",},
        768: {perPage: 2, padding: "0rem",},
        400: {perPage: 1, padding: "3rem",},
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
        768: {perPage: 1, padding: {right: "2rem"}, gap: "10px"},
        400: {perPage: 1, padding: {right: "2rem"}, gap: "10px"},
    }
});

chagaMushroomSlider.mount();