export class SearchController {
   constructor(inputElement, buttonElement) {
    this.inputElement = inputElement;
    this.buttonElement = buttonElement;
   }
   init() 
   {

        this.inputElement.style.display = "none";
        this.buttonElement.addEventListener("click", () => {
            if (this.inputElement.style.display == "none")
            {
                this.inputElement.style.display ="block";
                this.inputElement.focus();
            }
            else{
                this.inputElement.style.display = "none";
                this.inputElement.value =""
                this.listElement.render(this.datastore.items);
            }
        });

        this.inputElement.addEventListener("keydown", (e) =>{
            console.log("keydown: ", e.key);
            if (e.key === "Enter"){
                const query = this.inputElement.value.trim();
                window.location.href = `/courses?search=${encodeURIComponent(query)}`
            }
        })
    }
}