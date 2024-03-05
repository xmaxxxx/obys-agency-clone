

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
    delay:4,
})
tl.from("#page1",{
    delay:0.2,
    y:1600,
    duration:0.5,
    opacity:0,
    ease:power4
})
tl.to("#loader",{
    display:"none"
})
