const baseMenu = document.querySelector('.baseMenu');
const btnMenu = document.getElementById('btnMenu');
let isOpen = false;

btnMenu.addEventListener('click', ()=>{
    btnMenu.classList.toggle('activeMenu');
    baseMenu.classList.toggle('openMenu');
});


const goWtszp = document.getElementById('goWtszp');

goWtszp.addEventListener('click',()=>{
    window.open('https://api.whatsapp.com/send?phone=5535988874386&text=Ol%C3%A1%20vim%20pelo%20seu%20site%20%F0%9F%98%81', '_blank');
});

const btnWtszp = document.getElementById('btnWtszp');

btnWtszp.addEventListener('click',()=>{
    window.open('https://api.whatsapp.com/send?phone=5535988874386&text=Ol%C3%A1%20vim%20pelo%20seu%20site%20%F0%9F%98%81', '_blank');
});