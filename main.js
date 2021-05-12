import './sass/style.scss'

"use strict"
window.addEventListener("DOMContentLoaded", init);

function init(){
  get();

  
} 

function get() {
    fetch("https://foobardata.herokuapp.com/beertypes", {
      method: "get",
    })
            
      .then((e) => e.json())
      .then((data) => data.forEach(showBeer));
  }
 


 function showBeer(beer){
     console.log(beer)
     
     const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  const img_url =beer.label
  copy.querySelector(".name").textContent = beer.name;
  copy.querySelector(".cate").textContent = beer.category;
  copy.querySelector(".alc-lvl").textContent = beer.alc;
  copy.querySelector(".beer-img").src = img_url;
  copy.querySelector("button").addEventListener("click", displayModal);
  document.querySelector("main").appendChild(copy);
  }
 

  

  function displayModal(){
    console.log("clicked");
    document.querySelector("#selected-beer").classList.remove("hidden");
    document.querySelector("button").classList.add("hidden");
    document.querySelector("main").classList.add("blurred");

    document.querySelector("#next").classList.remove("hidden");
  document.querySelector("#close-1").addEventListener("click", closeForm);
  document.querySelector("#close-2").addEventListener("click", closeForm);
  document.querySelector("#close-3").addEventListener("click", closeForm);
  document.querySelector("#next").addEventListener("click", validateForm);
  document.querySelector("#back").addEventListener("click", backToPrevious);
  document.querySelector("#previous").addEventListener("click", backToPrevious);
  }

  function closeForm(){
    console.log("ll")

    document.querySelector("#selected-beer").classList.add("hidden");
    document.querySelector("button").classList.remove("hidden");
    document.querySelector("main").classList.remove("blurred");
    location.reload();
  }
 function validateForm(){
   console.log("vf")
   document.querySelector("#modal-one").classList.add("hidden");
   document.querySelector("#payment").classList.remove("hidden");
 }  
function backToPrevious(){
  console.log("btp")
  document.querySelector("#modal-one").classList.remove("hidden");
  document.querySelector("#payment").classList.add("hidden");
}
  


