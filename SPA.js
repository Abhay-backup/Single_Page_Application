location.href = "#";

function home() {
    location.href = "#";
}

function aboutus() {
    location.href = "#aboutus";
}

function image() {
    location.href = "#image";
}

function services() {
    location.href = "#service";
}

function contactus() {
    location.href = "#contact";
}





let flag = 0;

function controller(x){
    flag = flag + x;
    slidshow(flag);
}

slidshow(flag);

function slidshow(num){
    let slides = document.getElementsByClassName('slide');
    
    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = slides.length - 1;
        num = slides.length - 1;
    }

    for(let y of slides){
        y.style.display = "none";
    }
    
    slides[num].style.display = "block";
}


//Back to top 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (  document.body.scrollTop > 20   ||   document.documentElement.scrollTop > 20 ) 
  {
    mybutton.style.display = "block";
  } 
  else 
  {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}