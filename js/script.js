const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slides = document.querySelectorAll('.slider__item');
const dotsWrapper =document.querySelector('#dots');
const dots = document.querySelectorAll('.dots__item');
let index = 0;  

const activeSlide = n =>{
    for(let slide of slides)
        slide.classList.remove('active');
    slides[n].classList.add('active');
}

const activeDot = n =>{
    for(let dot of dots)
        dot.classList.remove('active');
    dots[n].classList.add('active');
}

const prepearCurrentSlide = (index) =>{
     activeSlide(index);
     activeDot(index);
} 

const nextSlide = () =>{
    autoSlide();
    clearInterval(interval);
}

const autoSlide = () =>{
     if(index === slides.length - 1){
        index = 0;
        prepearCurrentSlide(index);
    }else 
        prepearCurrentSlide(++index);
}

const prevSlide = () =>{
    if(index === 0){
        index = slides.length - 1;
        prepearCurrentSlide(index);
    }else
        prepearCurrentSlide(--index);
    clearInterval(interval);
}

dots.forEach((item,indexDot) =>{
    item.addEventListener('click',()=>{
        index = indexDot;
        prepearCurrentSlide(index);
        clearInterval(interval);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
const interval = setInterval(autoSlide,2000);