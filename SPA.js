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


