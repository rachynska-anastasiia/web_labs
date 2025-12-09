import { http } from "../api/http.js";
import { CarouselController } from "./carousel.js";
import { SearchController } from "./search.js";     
import { FilterController } from "./filter.js";

document.addEventListener("DOMContentLoaded", async () => {
    try{
        const res = await http.get("/api/carousel");
        const items = res.data;

        const categoriesContainer = document.querySelector(".carousel-categories");

        categoriesContainer.innerHTML = items.map(item => `
            <div>
                <a class="carousel-category-item">
                    <img src="${item.image}" alt="${item.title}">
                    <p class="pixel-text-middle-white">${item.title}</p>
                </a>
            </div>
        `).join("");
    }catch (e) {
        console.error("Carousel init error:", e);
    }

        

        const categoriesLeftBtn = document.querySelector(".categories-left");
        const categoriesRightBtn = document.querySelector(".categories-right");
        
        if (categoriesLeftBtn && categoriesRightBtn) {
            const categoriesController = new CarouselController(
                categoriesContainer, 
                categoriesLeftBtn, 
                categoriesRightBtn
            );
            categoriesController.init();
        }

    const coursesContainer = document.querySelector(".carousel-courses");
    const coursesLeftBtn = document.querySelector(".courses-left");
    const coursesRightBtn = document.querySelector(".courses-right");
    
    if (coursesContainer && coursesLeftBtn && coursesRightBtn) {
        const coursesController = new CarouselController(
            coursesContainer,
            coursesLeftBtn,
            coursesRightBtn
        );
        coursesController.init();
    }

    const input = document.querySelector(".search-input");
    const button = document.querySelector(".search-btn");

    if (input && button){
        const search = new SearchController(input, button);
        search.init()
    }

    const filterEls = document.querySelectorAll("[data-filter]");
    const courseCards  = document.querySelectorAll("[data-category]");
    if (filterEls.length && courseCards.length) {
        const filterController = new FilterController(filterEls, courseCards);
        filterController.init();
    }

});
