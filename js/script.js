let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

var loader = document.getElementById("preloader");
let nav = document.querySelector(".navbar");
window.addEventListener("load",function(){
    loader.style.display = "none";
});

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
nav.onclick = () =>{
    menu.classList.remove('fa-times')
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }
    else
    {
        document.body.classList.remove('active');
    }
}
document.querySelector('.switcher-btn').onclick = () =>{
    document.querySelector('.color-switcher').classList.toggle('active');
};

var typed = new Typed('.typing-text', {
    strings : ['','Tech Enthusiast.','Developer.','Student.'],
    loop : true,
    typeSpeed : 150
});

let themeButtons = document.querySelectorAll('.theme-buttons');

themeButtons.forEach(color =>{
    color.addEventListener('click', () =>{
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--main-color', dataColor);
    })
})
