const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => {
    observer.observe(element)
})


gsap.registerPlugin(ScrollTrigger);
setTimeout(() => {
    gsap.timeline({ // Replace this with the ScrollTrigger.create() syntax and it works 🤔
        scrollTrigger: {
            trigger: ".sec_00",
            scrub: true,
            pin: true,
            start: "50% 50%",
            end: "+=150%"
        }
    }).from(".sec_00-div", {
        scale: 0.5
    })
    
    gsap.timeline({ // Replace this with the ScrollTrigger.create() syntax and it works 🤔
        scrollTrigger: {
            trigger: ".sec_2",
            scrub: true,
            pin: true,
            start: "50% 50%",
            end: "+=150%"
        }
    }).from(".sec_2-div", {
        scale: 0.5
    })
}, 10);

// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".sec_2",
//         scrub: true,
//         pin: true,
//         start: "50% 50%",
//         end: "+=150%"
//     }
// }).from(".sec_2-div", {
//     scale: 0.5
// })


