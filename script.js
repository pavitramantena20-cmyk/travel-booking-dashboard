const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
       document.getElementById("popup").style.display = "flex";
    });
});

function darkMode(){
    document.body.classList.toggle("dark");
}

window.onload = function () {

    document.getElementById("loader").style.display = "none";

    document.getElementById("content").style.display = "block";
};
let topButton = document.getElementById("topBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {

    if (document.body.scrollTop > 100 || 
        document.documentElement.scrollTop > 100) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";
    }
}
function closePopup(){

    document.getElementById("popup").style.display = "none";
}
function topFunction(){

    document.body.scrollTop = 0;

    document.documentElement.scrollTop = 0;
}
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    let filter = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let name = card.getAttribute("data-name").toLowerCase();

        if(name.includes(filter)){

            card.style.display = "block";

        } else {

            card.style.display = "none";
        }
    });
});
const images = [

"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",

"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",

"https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1200"

];

let index = 0;

function changeSlide(){

    index++;

    if(index >= images.length){
        index = 0;
    }

    document.getElementById("slideImage").src = images[index];
}

setInterval(changeSlide, 3000);