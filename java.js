var loader = document.getElementById("preload");
window.addEventListener("load", function(){
 loader.style.display = "none";
})

//type effect
var i = 0, text; 
text = "WELCOME TO OUR HOMEPAGE.";


function write(){
    if (i < text.length) {
        document.getElementById("head").innerHTML += text.charAt(i);
        i++;
        setTimeout(write, 200);
    }
}
write();

//preloader
var loader = document.getElementById("preload");

window.addEventListener("load", function it(){
 loader.style.display = "none";
 setInterval(it, 5000);
})

//services
/*const faqs = document.querySelectorAll(".faq");

faqs.forEach( (faq) => { faq.addEventListener("click", () => { faq.classList.toggle("active");
  });
});*/

//2nd try on show hide

var display = 0;
function hideShow(j){
    var div = document.getElementById(j);
if (display == 1){
    div.style.display = 'none';
    display = 0;
}else{
    div.style.display = 'block';
    display = 1;
}
}

//final try
/*var acc = document.getElementsByClassName("accordion");

var i;
for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
       this.classList.toggle("active");
       this.parentElement.classList.toggle("active");

       var pannel = this.nextElementSibling;

       if(pannel.style.display === "block"){
        pannel.style.display = "none";
       }else{pannel.style.display = "block";}
    });
}*/
function on() {
    window.alert("You have succesfully logged in! \n Welcome");
}

//slider
var z = 0;
var x = [];
var time = 2000;

x[0] = 'woman/01.jpg';
x[1] = 'woman/02.jpg';


function a(){
    document.slide.src=x[z];

    if (z < x.length - 1) {
        z++;
    } else {
        z = 0;
    }

    setTimeout(a,time);
}
window.onload=a;


//for tilt
VanillaTilt.init(document.querySelector(".box"), {
    max: 25,
    speed: 400
});

