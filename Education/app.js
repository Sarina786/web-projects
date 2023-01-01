// Change navbar style

window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
});

//FAQS
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus';
        }
        else{
            icon.className = 'uil uil-plus';

        }
    })
})
//nav manue
const manue = document.querySelector(".nav_menue");
const men_btn = document.querySelector("#open_btn");
const clos_btn = document.querySelector("#close_btn");

men_btn.addEventListener('click' ,() =>{
    manue.style.display = "flex";
    clos_btn.style.display ="inline-block";
    men_btn.style.display="none";
})


//close manue
const closNav =() =>{
    manue.style.display="none";
    clos_btn.style.display="none";
    men_btn.style.display="inline-block";
    
    
    }
    clos_btn.addEventListener('click',closNav)
