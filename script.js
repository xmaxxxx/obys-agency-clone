function curser(){
    document.addEventListener("mousemove" ,function(dets){
    gsap.to('#crsr',{
        left:dets.x,
        top:dets.y
    })
})
}
function lodingAnimation(){
    var tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duratin:0.6,
    delay:0.5,
})
tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        var count = document.querySelector("#line1-part1 h5")
var timer = 0
setInterval(function(){
    if(timer<100){
        count.innerHTML = timer++
    }
    else{
        count.innerHTML = timer
    }
},33)
     }
})
tl.to(".line h2" ,{
    animationName:"anime",
    opacity:1
})
tl.to("#loader",{
    opacity: 0,
    duration:0.4,
    delay:3.5,
})
tl.from("#page1",{
    delay:0.1,
    y:1600,
    duration:0.1,
    opacity:0,
    ease:Power4
})
tl.to("#loader",{
    display:"none"
})

tl.from("#page1-line1 h1,#page1-line2 h1,#page1-line3 h2,#page1-line4 h1", {
    y: 140,
    stagger: 0.2,
  });

}
lodingAnimation()
curser();


