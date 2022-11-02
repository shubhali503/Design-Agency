const myHeader = document.querySelector(".header");

window.onscroll = function() { 
    if (window.scrollY >= 82) {
        myHeader.classList.add("header-colored");
        myHeader.classList.remove("header-transparent");
    } 
    else {
        myHeader.classList.add("header-transparent");
        myHeader.classList.remove("header-colored");
    }
};