export class FilterController{
    constructor(filterElement, courseCard){
        this.filterElement = filterElement;
        this.courseCard = courseCard;
        this.selected = new Set();
    }

    init(){
        this.filterElement.forEach(filterEl => {
            filterEl.addEventListener("click", () => {
                const value = filterEl.dataset.filter;

                if (this.selected.has(value)){
                    this.selected.delete(value);
                    filterEl.classList.remove("selected");
                } else {
                    this.selected.add(value);
                    filterEl.classList.add("selected");
                }

                if (this.selected.size === 0) {
                    this.courseCard.forEach(card => (card.style.display = "block"));
                    return;
                }

                this.courseCard.forEach(card => {
        
                    const matches = this.selected.has(card.dataset.category) 
                        || this.selected.has(card.dataset.level)
                        || this.selected.has(card.dataset.weeks);

                    card.style.display = matches ? "" : "none";
                });
            })
        })
    }
}