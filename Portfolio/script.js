// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')           
}
// scroll sections
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 100
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            // active navbar link
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
            // active sections for animation on scroll
            sec.classList.add('show-animate')
        }
        // if want to use animation repeats on scroll use this
        else {
            sec.classList.remove('show-animate')
        }
    })
    // sticky header
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100)
    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

    // animation footer on scroll

    let footer = document.querySelector('footer')
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY <= document.scrollingElement.scrollHeight)
}
// typed-js
const type = new Typed('.multiple-text',{
    strings: ['Web Designer','','Web Developer','','MERN Fullstack'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});
// typed-js
const skills = new Typed('.multiple-texts' , {
    strings: ['Mongo DB','','Express JS','','React JS','','Node JS','',],
    typeSpeed:100,
    backSpeed:100,
    backdelay:1000,
    loop:true,
});
// =================scroll reveal===============//

ScrollReveal({ 
    reset: true ,
    distance: '80px' ,
    duration: 2000 ,
    delay: 200
});

ScrollReveal().reveal('.home-content,.heading,.pt', { origin: 'top'});
ScrollReveal().reveal('.cl,.fl,.bl', { origin: 'left'});
ScrollReveal().reveal('.cr,.fr,.br', { origin: 'right'});
ScrollReveal().reveal('.home-sci,.btn-box,.pb,.fb', { origin: 'bottom'});

// // ===================form validation====================
			const scriptURL = 'https://script.google.com/macros/s/AKfycbzqMeW7l5915U-tjIs5Zh0FCju8CBV61zMKVVA4OnE-PAusnHjxRjgQPdbeaTnzvnVk/exec'
			const form = document.forms['contactform']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Thank you! your form is submitted successfully." ))
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
			})
