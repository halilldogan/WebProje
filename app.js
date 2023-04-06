const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

document.getElementById("products").addEventListener("click",function(){alert("Bu sekme henüz aktif değil")})
document.getElementById("signUp").addEventListener("click",function(){alert("Çok yakında !")})