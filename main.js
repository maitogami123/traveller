document.querySelectorAll('.explore-card__favourite').forEach(item => {
    item.addEventListener('click', (e) => {
        if ( e.target.style.opacity == 1 )
            e.target.style.opacity = 0;
        else
            e.target.style.opacity = 1;
    })
})


document.querySelector('.nav__hamburger').onclick = () => {
    document.querySelector('.nav__icon-menu').classList.toggle('hidden');
    document.querySelector('.nav__icon-close').classList.toggle('hidden');
    document.querySelector('.nav__mobile-logo').classList.toggle('hidden');
    if (window.getComputedStyle(document.querySelector('.nav')).getPropertyValue('--traslateValue') == '0%')
        document.querySelector('.nav').style.setProperty('--traslateValue', '100%')
    else 
        document.querySelector('.nav').style.setProperty('--traslateValue', '0%')
}

window.onscroll = () => {
    if (window.scrollY > 50) {
        document.querySelector('.nav__icon-to-top').classList.remove('hidden')
        let mobileNav = document.getElementById('nav__mobile');
        mobileNav.style.setProperty('--bgVar', '#E76F51')
    } else {
        let mobileNav = document.getElementById('nav__mobile');
        mobileNav.style.setProperty('--bgVar', 'transparent')
        document.querySelector('.nav__mobile').classList.remove('active')
        document.querySelector('.nav__icon-to-top').classList.add('hidden')
    }
}

document.querySelector('.nav__icon-to-top').onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}