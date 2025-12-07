export class CarouselController {
    constructor(carouselElement, leftButtonElement, rightButtonElement) {
        this.carousel = carouselElement;
        this.leftButton = leftButtonElement;
        this.rightButton = rightButtonElement;
        this.scrollAmount = 300;
    }
    init() {
        if (!this.carousel || !this.leftButton || !this.rightButton) return;
        
        this.leftButton.addEventListener("click", () => {
            this.carousel.scrollLeft -= this.scrollAmount;
        });
        
        this.rightButton.addEventListener("click", () => {
            this.carousel.scrollLeft += this.scrollAmount;
        });
        
    }
    
}
