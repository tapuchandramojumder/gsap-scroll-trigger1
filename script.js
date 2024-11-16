// Image animation start top 0 and finished top -100% where page was pin, in this case verical scrolling happend 
gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        markers:true,
        scrub:2,
        pin:true
    }
})

// Text animaation start top 0 and finished top 100% where page was pin, in this case Horizontal scrolling happened

gsap.to("#page3 h1",{
    transform:"translateX(-90%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        markers:true,
        scrub:3,
        pin:true
    }
})