import { http } from "../api/http.js";
import { CarouselController } from "./carousel.js";
import { SearchController } from "./search.js";     
import { FilterController } from "./filter.js";

document.addEventListener("DOMContentLoaded", async () => {
    const categoriesLeftBtn = document.querySelector(".categories-left");
    const categoriesRightBtn = document.querySelector(".categories-right");
    const categoriesContainer = document.querySelector(".carousel-categories");

    try{
        const res = await http.get("/api/carousel");
        const items = res.data;

        

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

});
