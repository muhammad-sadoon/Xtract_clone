let closeBtn = document.querySelector(".closeBtn");
let navbar = document.querySelector(".navbar");
flage = true
closeBtn.addEventListener("click",()=>{
    if(flage){
        navbar.style.opacity = 1;
        flage = false
    }else{
        navbar.style.opacity = 0;
        flage = true
    }
})