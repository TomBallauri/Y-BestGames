let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})


const card = document.querySelectorAll(".card")

card.forEach(el => {
    el.addEventListener("mousemove", e => {

        let elRect = el.getBoundingClientRect()

        let x = e.clientX - elRect.x
        let y = e.clientY - elRect.y

        let midCardHeight = elRect.width / 2
        let midCardWidth = elRect.width / 2

        let angleY = -(x - midCardWidth) / 1.5
        let angleX = (y - midCardHeight) / 1.5

        el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`

        
    })

    el.addEventListener("mouseleave", () => {
        el.children[0].style.transform = "rotateX(0) rotateY(0)"
    })

})


var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");


openBtn.onclick = openNav;
closeBtn.onclick = closeNav;



/*Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}