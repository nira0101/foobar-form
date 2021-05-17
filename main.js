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
<<<<<<< HEAD
  copy.querySelector(".name").textContent =('Name: ')+ beer.name;
  copy.querySelector(".cate").textContent = ('Type: ')+ beer.category;
  copy.querySelector(".alc-lvl").textContent =('vol: ')+ beer.alc;
  const amount = copy.querySelector("input[type=number]")
  amount.addEventListener('change', getOrders);
=======
  copy.querySelector(".name").textContent = ('Name: ')+beer.name;
  copy.querySelector(".cate").textContent = ('Type: ')+beer.category;
  copy.querySelector(".alc-lvl").textContent = ('vol: ')+beer.alc;
>>>>>>> a8dad9cb111ea255dfff502cd60646701c51e247
  copy.querySelector(".beer-img").src = img_url;
  
  //add to cart
  const amount = copy.querySelector(".next")
  amount.addEventListener('click', ()=>{
    const div = document.createElement('div')
    div.innerHTML = `
<<<<<<< HEAD
   
=======
  
>>>>>>> a8dad9cb111ea255dfff502cd60646701c51e247
    <h3>${beer.name}</h3>
    <h4>${beer.category}</h4>
    <button class="c">remove</button>
  
<<<<<<< HEAD
    const content = document.querySelector('.checkbox_container')
    content.appendChild(div)
    findTotal()
    
  }
  function findTotal(){
    let arr = document.getElementsByName('quantity');
    let tot=0;
    for(let i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total').value = tot;
}

  
=======
    <label>Quantity:</label>
      <div class="amount">
        <button id="subtract">-</button>
        <input type="number" name='total' value="0"  id="counter" >
        <button id="add">+</button>
      </div>

    ` 
    /*  <img src="${beer.label}" class="atc-img" > */
    //rmove the selected item
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
if(input.value === input.value){
  document.querySelector("#total").value = input.value; 
}
else{
  document.querySelector("#total").value = input.value ++; 
}
    
 
  })
  btnSub.addEventListener("click", ()=>{
    input.value = parseInt(input.value) - 1;
    if(input.value === input.value){
      document.querySelector("#total").value = input.value; 
    }
    else{
      document.querySelector("#total").value = input.value --; 
    }

  })


 
    const content = document.querySelector('.checkbox_container');
    document.querySelector(".confirm").addEventListener("click", displayModal);
   
    
    content.appendChild(div)


  })


  document.querySelector("main").appendChild(copy);
 

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
>>>>>>> a8dad9cb111ea255dfff502cd60646701c51e247
  
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

 