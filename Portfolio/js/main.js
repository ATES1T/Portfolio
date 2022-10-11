const nav = document.querySelector('#nav')
const navbutton = document.querySelector('#nav-button')
const navbuttonimg = document.querySelector('#nav-button-img')

navbutton.onclick = () => {
    if (nav.classList.toggle('open')) {
        navbuttonimg.src = "./img/icon/nav-close.svg";
    } else {
        navbuttonimg.src = "./img/icon/nav-open.svg";
        }
    }

    AOS.init();
