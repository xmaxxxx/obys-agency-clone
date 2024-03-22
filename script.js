function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
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


  tl.from(
    "#page1-line1, #page2",
    {
      opacity: 0,
    },
    "-=1.2"
  );
}
lodingAnimation()
curser();
locomotive();

