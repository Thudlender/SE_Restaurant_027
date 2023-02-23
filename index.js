let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector("haeder .flex .navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
};

let search = document.querySelector("#search-icon");
search.onclick = () =>{
    let search_form = document.querySelector("#search-form")
    search_form.classList.toggle("active");
}

let close_icon = document.querySelector("#close");
close_icon.onclick = () =>{
    let search_form = document.querySelector("#search-form")
    search_form.classList.remove("active");
}

var swiper = new Swiper(".home-slider", {
    spaceBetween:30,
    centerSlides:true,
    autoplay:{
        delay:3000, //เวลาในการเลื่อนสไลด์ (millisecond)
        disableOnInteraction:false,

    },
    pagination :{
        el:".swiper-pagination",
        clickable:true,
    },
    loop:true
});

var swiper = new Swiper(".review-slider", {
    spaceBetween:30,
    centerSlides:true,
    autoplay:{
        delay:3000, //เวลาในการเลื่อนสไลด์ (millisecond)
        disableOnInteraction:false,

    },
    pagination :{
        el:".swiper-pagination",
        clickable:true,
    },
    loop:true,
    breakpoints:{
        0:{
            slidesPerView2,
        },
        640:{
            slidesPerView2,
        },
        768:{
            slidesPerView2,
        },
        1024:{
            slidesPerView3,
        },
    }
});
