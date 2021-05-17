const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {


    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});

// Nav-Mobile//
let openNav = document.getElementById("openNav");
let closeNav = document.getElementById("closeNav");
let overlay = document.getElementById("overlay");
let navMobile = document.getElementById("navMobile");

openNav.onclick = function () {
    navMobile.style.transform = "translateX(0%)";
    navMobile.style.opacity = "1";
    overlay.style.display = "block";
}

closeNav.onclick = function () {
    navMobile.style.transform = "translateX(100%)";
    navMobile.style.opacity = "0";
    overlay.style.display = "none";
}

// Send Mail //
let btnMail = document.getElementById("btnMail");

btnMail.onclick = function () {
    let mail = document.getElementById("txtMail").value;
    let hrefMail = document.getElementById("hrefMail");

    hrefMail.href = `mailto:${mail}`;
    console.log(hrefMail);
    document.querySelector("#txtMail").value = "";
}

//
// function Explore() {
//     document.body.style.transform = 'translateY(-1000px)';
//     document.body.style.transition = "1s";
// }






