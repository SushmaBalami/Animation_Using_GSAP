var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 97%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to(".fanta",{
    top:"120%",
    left: "0%",
},'orange')

tl.to(".orange2",{
    top:"160%",
    left: "23%",
},'orange')


tl.to(".orange",{
    width:"15%",
    top:"165%",
    right: "10%",
},'orange')

tl.to(".leaf",{
    // width:"15%",
    top:"110%",
    left: "50%",
},'orange')

tl.to(".leaf2",{
    // width:"15%",
    top:"110%",
    left: "0%",
},'orange')

tl.to(".leaf3",{
    // width:"15%",
    top:"110%",
   right:"0%",
},'orange')


// cards
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#three",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        // markers: true,
    }
});

tl.to("#cocacola", {
    y: "0%",
    opacity: 1,
    duration: 1
}, 0)
.to("#fanta", {
    y: "0%",
    opacity: 1,
    duration: 1
}, 0)
.to("#pepsi", {
    y: "0%",
    opacity: 1,
    duration: 1
}, 0)
.to(".lemon", {
    rotation: 360,
    duration: 2,
    transformOrigin: "center center"
}, 0)
.from(".card h1", {
    y: "100%",
    opacity: 0,
    duration: 1,
    stagger: 0.2
}, 0.5)
.from(".card button", {
    y: "100%",
    opacity: 0,
    duration: 1,
    stagger: 0.2
}, 1);
