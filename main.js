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
    document.querySelector('.nav').classList.toggle('mobile-hidden');
}

window.onscroll = () => {
    if (window.scrollY > 50) {
        document.querySelector('.nav__mobile').classList.add('active')
        document.querySelector('.nav__icon-to-top').classList.remove('hidden')
    } else {
        document.querySelector('.nav__mobile').classList.remove('active')
        document.querySelector('.nav__icon-to-top').classList.add('hidden')
    }
}

document.querySelector('.nav__icon-to-top').onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}