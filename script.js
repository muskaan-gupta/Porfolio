 /*======= toggle icon navbar ===========*/
 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');
 
 menuIcon.onclick = () => {
     menuIcon.classList.toggle('bx-x');
     navbar.classList.toggle('active');
 };
 
 
  /*======= scroll section active line ===========*/
 
 let sections = document.querySelectorAll('section');
 let navlinks = document.querySelectorAll('header nav a');
 
 window.onscroll = () => {
     sections.forEach(sec => {
         let top = window.scrollY;
         let offset = sec.offsetTop - 150;
         let height = sec.offsetHeight;
         let id = sec.getAttribute('id');
 
         if (top >= offset && top < offset + height){
             navlinks.forEach(links => {
                 links.classList.remove('active');
                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
             });
         };
     });
 
     /*======= sticky nav bar ===========*/
     let header = document.querySelector('header');
 
     header.classList.toggle('sticky', window.scrollY > 100);
 
     /*======= remove toggle icon and navbar when click navbar link ===========*/
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
 
 };
 
  /*======= scroll reveal ===========*/
  ScrollReveal({ 
     //reset: true,
     distance: '80px',
     duration: 1000,
     delay: 200
 
 });
 
 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
 
  /*======= typed js ===========*/
 const typed = new Typed('.multiple-text', {
     strings: [ 'Developer', 'Student' ],
     typeSpeed:100,
     backSpeed:100,
     backDelay:800,
     loop: true,
 });

// Google contact form //
const scriptURL = 'https://script.google.com/macros/s/AKfycbz4XF894czG_-ghv3xK3y_xWrpIhiXokBnWXaH2ZhGiYCo2bOSqWRbDOHsf7la75x_tjw/exec'
        const form = document.forms['submit-to-google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })
