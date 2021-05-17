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
  copy.querySelector(".name").textContent = ('Name: ')+beer.name;
  copy.querySelector(".cate").textContent = ('Category: ')+beer.category;
  copy.querySelector(".alc-lvl").textContent = ('alcohol-level: ')+beer.alc;
  const amount = copy.querySelector(".next")
  amount.addEventListener('click', getOrders)
  copy.querySelector(".beer-img").src = img_url;
  document.querySelector("main").appendChild(copy);

  function getOrders(e) {
    console.log(e.target.value)
    console.log(beer.name)
  
    const div = document.createElement('div')
    div.innerHTML = `
    <img src="${beer.label}" >
    <h3>${beer.name}</h3>
    <h4>${beer.category}</h4>
    <p>${e.target.value}</p>
 
    <label>Quantity:</label>
    <input type="number" id="quantity" name="quantity" min="1" max="10"
            required>

    `  
    
 
    const content = document.querySelector('.checkbox_container');


    document.querySelector(".confirm").addEventListener("click", displayModal);
    content.appendChild(div)
    findTotal();
    
  }


  function findTotal(){
 
console.log(findTotal)
    const arr = document.getElementsByTagName('quantity');

    const tot=0;

    for(var i=0;i<arr.length;i++){

        if(parseInt(arr[i].value)){
          tot += parseInt(arr[i].value);
          
     document.getElementById('total').value= tot; 
        }

            

    }

  }
 
  
  
/*  section Modal */
  function displayModal(){
    console.log("clicked");
    document.querySelector("#selected-beer").classList.remove("hidden");
    document.querySelector(".confirm").classList.add("hidden");
    document.querySelector("main").classList.add("blurred");

  document.querySelector("#next").classList.remove("hidden");

  document.querySelector("#close-2").addEventListener("click", closeForm);
  document.querySelector("#close-3").addEventListener("click", closeForm);

  document.querySelector("#back").addEventListener("click", backToPrevious);
  document.querySelector('#back').addEventListener('click', confirm_payment);
  document.querySelector("#previous").addEventListener("click", backToPrevious);
 /* I used the button back to next to confirm payment  */
  }

  function closeForm(){
    console.log("ll")

    document.querySelector("#selected-beer").classList.add("hidden");
    document.querySelector(".confirm").classList.remove("hidden");
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

  document.querySelector("#payment").classList.add("hidden");
}
/* confirm payment section */
function confirm_payment(){
  document.querySelector("#payment").classList.add("hidden");
  document.querySelector('#confirm').classList.remove('hidden');

 
}

 }