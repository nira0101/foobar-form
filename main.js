import './sass/style.scss'

"use strict"


const Beers = {
    name: "",
    category: "",
    alc: "",
    label: ""

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
  copy.querySelector(".name").textContent = beer.name;
  copy.querySelector(".cate").textContent = beer.category;
  copy.querySelector(".alc-lvl").textContent = beer.alc;


  



  document.querySelector("main").appendChild(copy);
  }
  get();

