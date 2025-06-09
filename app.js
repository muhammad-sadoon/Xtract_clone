AOS.init();
AOS.once = true;
let closeBtn = document.querySelector(".closeBtn");
let navbar = document.querySelector(".navbar");
flage = true
closeBtn.addEventListener("click", () => {
    if (flage) {
        navbar.style.display = "block";
        flage = false
    } else {
        navbar.style.display = "none";
        flage = true
    }
})

let li_items = document.querySelectorAll(".page_1 ul li");
let ul = document.querySelector(".page_1 ul")
let arr = [];
let animateBoolean = false
li_items.forEach((v) => {
    arr.push(v)
})


function animateMove() {
    var item = arr.shift()
    ul.removeChild(item)
    ul.appendChild(item)
    arr.push(item)

}
var setItervalAnimationFrame = setInterval(animateMove, 2000)