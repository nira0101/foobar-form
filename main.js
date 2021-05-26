import './sass/style.scss'

"use strict"
window.addEventListener("DOMContentLoaded", init);

const form = document.querySelector("#form")


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
  copy.querySelector(".cate").textContent = ('Type: ')+beer.category;
  copy.querySelector(".alc-lvl").textContent = ('vol: ')+beer.alc;
  copy.querySelector(".beer-img").src = img_url;
  
  //add to cart
  const amount = copy.querySelector(".atc")
  amount.addEventListener('click', (p)=>{
    const div = document.createElement('div')
    div.innerHTML = `
    <section id="addtc"> 
    <img src="${beer.label}" class="atc-img" >
    <h3 class = b_name>${beer.name}</h3>
    <h4>${beer.category}</h4>
    <button class="c">remove</button>
  
    <label>Quantity:</label>
      <div class="amount">
        <button id="subtract">-</button>
        <input type="number" name='total' value="0"  id="counter" >
        <button id="add">+</button>
      </div>
      <section>

      

      
    `
   
    //remove the selected item
    const close = div.querySelector(".c");
    close.addEventListener("click", ()=>{

      div.remove();
    });

    //increment and decrement
    let btnAdd = div.querySelector("#add");
    let btnSub = div.querySelector("#subtract");
    let input = div.querySelector("#counter");

  btnAdd.addEventListener("click", ()=>{
    input.value = parseInt(input.value) + 1;
/* if(input.value === input.value){
  document.querySelector("#total").value = input.value; 
}
else{
  document.querySelector("#total").value = input.value ++; 
} */
    
 
  })
  btnSub.addEventListener("click", ()=>{
    input.value = parseInt(input.value) - 1;
  /*   if(input.value === input.value){
      document.querySelector("#total").value = input.value; 
    }
    else{
      document.querySelector("#total").value = input.value --; 
    } */

  })



 
    const content = document.querySelector('.checkbox_container');
      //validate form
    document.querySelector(".pay-confirm").addEventListener("click", ()=>{
      console.log("clicked");
      document.querySelector("#selected-beer").classList.remove("hidden");
      document.querySelector(".pay-confirm").classList.add("hidden");
      document.querySelector("main").classList.add("blurred");
      document.getElementById("submit").addEventListener("click", (e) =>{
        if (!form.elements.your_name.checkValidity()) {
          document.querySelector("#error-2").classList.add("hidden");
          document.querySelector("#error-3").classList.add("hidden");
          document.querySelector("#error-4").classList.add("hidden");
          document.querySelector("#error-1").classList.remove("hidden");
        } else if (!form.elements.c_number.checkValidity()) {
          document.querySelector("#error-1").classList.add("hidden");
          document.querySelector("#error-3").classList.add("hidden");
          document.querySelector("#error-4").classList.add("hidden");
          document.querySelector("#error-2").classList.remove("hidden");
        }else if (!form.elements.e_date.checkValidity()){
          document.querySelector("#error-1").classList.add("hidden");
          document.querySelector("#error-2").classList.add("hidden");
          document.querySelector("#error-4").classList.add("hidden");
          document.querySelector("#error-3").classList.remove("hidden");
        } else if (!form.elements.s_number.checkValidity()){
          document.querySelector("#error-1").classList.add("hidden");
          document.querySelector("#error-2").classList.add("hidden");
          document.querySelector("#error-3").classList.add("hidden");
          document.querySelector("#error-4").classList.remove("hidden");
        }else {
          document.querySelector("#payment").classList.add("hidden");
          document.querySelector("#confirm").classList.remove("hidden");
          console.log("called")
          
          
  const data = [
    { name: beer.name , amount: 1},
    
  ];

  const beerData =JSON.stringify(data);

  fetch("https://foobardata.herokuapp.com/order", {
  method: "post",
  headers: {
    "Content-Type" : "application/json; charset=utf-8",
},
  body: beerData
  })
  .then(e => e.json())
  .then(data => console.log(data));
       
        }

       
      });
    
    document.querySelector("#close-2").addEventListener("click", closeForm);
    document.querySelector("#close-3").addEventListener("click", closeForm);

    });
   
    
    content.appendChild(div)


  })


  document.querySelector("main").appendChild(copy);
 

 }
 

 function postData(){
 
 }



/*   function findTotal(){
    let arr = document.getElementsByName('total');

    let total=0;

    for(var i=0;i<arr.length;i++){

        if(parseInt(arr[i].value)){
          total += parseInt(arr[i].value);
          
     document.getElementById('counter').value= total; 
        }

            

    }
  } */
  


function closeForm(){
  console.log("ll")

  document.querySelector("#selected-beer").classList.add("hidden");
  document.querySelector(".pay-confirm").classList.remove("hidden");
  document.querySelector("main").classList.remove("blurred");
  location.reload();
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





form.setAttribute("novalidate", true);