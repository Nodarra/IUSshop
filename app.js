var btnselect0 = document.querySelector(".option0");

var btnselect1 = document.querySelector(".option1");

var btnselect2 = document.querySelector(".option2");

var btnselect3 = document.querySelector(".option3");

var shirts = document.querySelector(".article1");

var hats = document.querySelector(".article2");

var backpacks = document.querySelector(".article3");


btnselect0.addEventListener('click', function(){
    shirts.style.display = "";
    hats.style.display = "";
    backpacks.style.display = "";
});

btnselect1.addEventListener('click', function(){
    shirts.style.display = "";
    hats.style.display = "none";
    backpacks.style.display = "none";
});

btnselect2.addEventListener('click', function(){
    shirts.style.display = "none";
    hats.style.display = "";
    backpacks.style.display = "none";
});

btnselect3.addEventListener('click', function(){
    shirts.style.display = "none";
    hats.style.display = "none";
    backpacks.style.display = "";
});

