//selecting offerbox button

const heading = document.getElementById("top")
const btn = document.getElementById("btn")
btn.addEventListener("click",function(){
    heading.remove()
})

//Selecting slider
const track = document.querySelector(".slider-track");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let index = 0;

next.addEventListener("click", () => {
  if (index < 1) {
    index++;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
});

prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
});

//Selecting Most wanted scrool
const container = document.querySelector(".Mostwanted__container");
const scrollStep = 300; 

container.addEventListener("click", () => {
  const maxScroll = container.scrollWidth - container.clientWidth;
  const nextScroll = container.scrollLeft + scrollStep;

  if (nextScroll >= maxScroll) {
    container.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    container.scrollBy({ left: scrollStep, behavior: "smooth" });
  }
});

//Selecting Most wanted like heart
const heartbtn = document.querySelectorAll(".heartbtn")
heartbtn.forEach(button => {
  button.addEventListener("click", function () {
    const icon = this.querySelector("i");
     icon.classList.toggle("red");
      icon.classList.toggle("fa-regular");
       icon.classList.toggle("fa-solid"); 
       });
});
