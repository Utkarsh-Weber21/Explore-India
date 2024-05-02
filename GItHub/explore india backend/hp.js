gsap.to(".nav-bar",{
  backgroundColor : "#2970DB",
  duration : 0.5,
  height : "8%",

  scrollTrigger:{
    trigger:"nav-bar",
    scroller:"body",
    start:"top -15%",
    end:"top -16%",
    scrub:1
  }
})

const f = document.querySelector(".state-head");
const b = document.querySelector(".state-card");
const btn = document.querySelector(".btu");

var flag = 0;

btn.addEventListener("click",function(){
  if(flag == 0){
    b.style.right = "0%";
    f.style.left = "-100%";
    flag = 1;
  }
  else{
    b.style.right = "-100%";
    f.style.left = "0%";
    flag = 0;
  }
})