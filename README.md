
# [GSAP](https://greensock.com/)

Professional-grade JavaScript animation for the modern web




## Lessons Learned

- gsap.registerPlugin() 
- gsap.timeline()
- ScrollTrigger

## Usage

- Registering a plugin with the GSAP core ensures that the two work seamlessly together and also prevents tree shaking issues in build tools/bundlers. You only need to register a plugin once before using it
- A Timeline is a powerful sequencing tool that acts as a container for tweens and other timelines, making it simple to control them as a whole and precisely manage their timing. Without Timelines, building complex sequences would be far more cumbersome because you'd need to use a delay for every animation. 
- ScrollTrigger creates jaw-dropping scroll-based animations with minimal code. Or trigger anything scroll-related, even if it has nothing to do with animation.

check the documentation [here](https://greensock.com/docs/v3/Plugins/ScrollTrigger)

use script tags

```bash
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>
<script src="./app.js"></script>
```

app.js
```
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
```
    
## Documentation

[Documentation](https://greensock.com/docs/v3/Plugins/ScrollTrigger)


## Demo

- [live demo](https://warsayt.github.io/GSAP-animation/)

- [Github repo](https://github.com/WarsayT/GSAP-animation)


