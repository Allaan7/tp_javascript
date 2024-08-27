
// Exercice 1

let bouton = document.querySelector("button");
bouton.addEventListener("click", function(event){
    document.querySelector("div > div").style.backgroundColor = "green";
});


// Exercice 2
let imgMandalorian = document.querySelector("img");
imgMandalorian.addEventListener("click", function(event) {
    if( this.style.width == "" ) {
        this.style.width = "120px";
        this.style.height = "120px";
    } else {
        let h, w;
        h = this.style.height;
        w = this.style.width;
        h = Number(h.replace("px", ""));
        w = Number(w.replace("px", ""));
        h += 20;
        w += 20;
        this.style.width = w + "px";
        this.style.height = `${h}px` ;
    }
});


// Exercice 3

let inputColor = document.querySelector("input");

inputColor.addEventListener("change", function(event) {
    document.querySelector("body").style.backgroundColor = inputColor.value;
})


// Exercice 4 

let divNoire = document.querySelector(".blackDiv");
divNoire.addEventListener("click", function(event) {
    if( this.style.width == "" ) {
        this.style.width = "100px";
        this.style.height = "100px";
    } else {
        let h, w;
        h = this.style.height;
        w = this.style.width;
        h = Number(h.replace("px", ""));
        w = Number(w.replace("px", ""));
        h *= 2;
        w *= 2;
        this.style.width = w + "px";
        this.style.height = `${h}px`;
    }
});

// Exercice 5
let imgSlider = document.getElementById("imgSlider");
let images = ["img1.jpeg","img2.jpeg","img3.jpeg","img4.jpeg","img5.jpeg"];
let numero = 0;
function changeImage (event) {
    numero++;
    if(numero >= images.length){
        numero = 0;
    }
    imgSlider.src = "image/" + images[numero];
}
setInterval(changeImage, 5000);


// CORRECTION


