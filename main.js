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
  const amount = copy.querySelector("input[type=number]")
  amount.addEventListener('change', getOrders)
  copy.querySelector(".beer-img").src = img_url;
  copy.querySelector("button").addEventListener("click", displayModal);
  document.querySelector("main").appendChild(copy);

  function getOrders(e) {
    console.log(e.target.value)
    console.log(beer.name)
  
    const div = document.createElement('div')
    div.innerHTML = `
    <img ${img_url}>
    <h3>${beer.name}</h3>
    <p>${e.target.value}</p>
    ` 
  
    const content = document.querySelector('.checkbox_container')
    content.appendChild(div)
    
  }
 
  
  
/*  section Modal */
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
  document.querySelector('#back').addEventListener('click', confirm_payment);
  document.querySelector("#previous").addEventListener("click", backToPrevious);
 /* I used the button back to next to confirm payment  */
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
   document.querySelector("button").classList.remove("hidden");
 }  
function backToPrevious(){
  console.log("btp")
  document.querySelector("#modal-one").classList.remove("hidden");
  document.querySelector("#payment").classList.add("hidden");
}
/* confirm payment section */
function confirm_payment(){
  document.querySelector("#payment").classList.add("hidden");
  document.querySelector('#confirm').classList.remove('hidden');
  document.querySelector('#modal-one').classList.add('hidden');
 
}

 }