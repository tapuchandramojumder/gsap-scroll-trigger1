gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        start:"top 0%",
        end:"top -100%",
        markers:true,
        scrub:2,
        pin:true
    }
})