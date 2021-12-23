const loginbutton = document.querySelector(".container-btn");
const mainform = document.querySelector(".main");

loginbutton.addEventListener("click", ()=>{
  mainform.classList.remove("display-none");
});

const crossout = document.querySelector(".crossbtn");

crossout.addEventListener("click", ()=>{
  mainform.classList.toggle("display-none");
})
