import './sass/style.scss'

"use strict"


const images = [
    { id: 1, src: './public/elhefe.png', title: 'elhefe', description: 'beer' },
    { id: 2, src: './public/githop.png', title: 'githop', description: 'beer' },
   
  ];
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
  document.querySelector("main").appendChild(copy);
  }
  get();

