// event bubbling & capturing
// stop propogation , Immediate Propogation & Prevent Default


// event bubbling 
document.addEventListener('DOMContentLoaded', function() {
    let div = document.querySelector("div");
    let button = document.querySelector("button");
  
    div.addEventListener("click", () => {
      console.log("div");
    });
  
    button.addEventListener("click", (event) => {
        event.stopPropagation();
      console.log("button");
    });
  });
  