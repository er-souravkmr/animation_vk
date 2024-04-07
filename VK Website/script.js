let crsr = document.querySelector("#cursor");
let crsrb = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.top = dets.y +"px";
    crsr.style.left = dets.x +"px";
    crsrb.style.top = dets.y-40 +"px";
    crsrb.style.left = dets.x-40 +"px";
    
})







//GSAP for animation 
gsap.to('#nav',{
    duration : 0.5,
    backgroundColor: "black",
    height:'55px',
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        start: "top -10%",
        end:"top -11%",
        scrub:1      
    }
});

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:'body',
        start: "top -25%",
        end: "top -80%",
        scrub:2
    }
})

