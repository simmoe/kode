let circle = document.querySelector('#unik')
let direction = {
    updown:0,
    leftright:0
}
let threshold = 10

document.addEventListener('keydown', (e) => {
    circle.innerHTML = e.key
    console.log(direction)
    switch (e.key) {
        case 'w':
            direction.updown--
            break;
        case 's':
            direction.updown++
            break;
        case 'a':
            direction.leftright--
            break;
        case 'd':
            direction.leftright++
            break;
        default:
            break;
    }
})

setInterval(()=>{
    circle.style.transform = 'translate(' + direction.leftright * threshold + 'px,' + direction.updown * threshold + 'px)'
}, 200)