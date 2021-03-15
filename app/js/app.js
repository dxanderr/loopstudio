const body = document.querySelector('body');
const hamburger = document.getElementById('hamburger');
const header = document.querySelector('.header');
const fadeElements = document.querySelectorAll('.has-fade');


hamburger.addEventListener('click', ()=>{
    if(header.classList.contains('open')){ // hamberguer close
        header.classList.remove('open');
        body.classList.remove('scrollStop');
        fadeElements.forEach( (element)=>{
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })

    } else{                                //  hamburger open
        header.classList.add('open');
        body.classList.add('scrollStop');
        fadeElements.forEach((element)=>{
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })

    }
});


