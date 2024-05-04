const page1Animation = () => {
    const {to,from,timeline} = gsap

const tl = timeline()

tl.from('nav .logo , nav .links a , nav .nav-btn' , {
    y:-60,
    duration:1,
    opacity:0,
    stagger:.04
},'a')

tl.from('.landing .text h1 , .landing .text p , .text-btn',{
    delay:.6,
    opacity:0,
    duration:1,
    stagger:.1
},'a')

tl.from('.landing .radio-img',{
    opacity:0
})

const imges = document.querySelectorAll('.cards .imges .img')

imges.forEach((img , i) => {
    gsap.to(img , {
        y:70,
        opacity:0
    })
    gsap.to(img , {
        delay:.100 * i ,
        y:0,
        duration:1,
        opacity:1,
        scrollTrigger:{
            trigger:img,
            start:'top 80%',
            end:'bottom top',
        }
    })
});
}
 page1Animation()

const cardsAnimation = () => {
    
const tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.service-cards',
        start:'top 60%',
        end:'bottom 75%',
        scrub:2,
    }
})
tl.from('.service-card:nth-child(odd)' , {
    x:-200,
    duration:1,
    opacity:0,
    stagger:.4
    
},'cards')
tl.from('.service-card:nth-child(even)' , {
    x:200,
    duration:1,
    opacity:0,
    stagger:.4
},'cards')
}

cardsAnimation()