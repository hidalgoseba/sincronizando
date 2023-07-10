// menu show
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
     nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show')
        })
    }

}
showMenu('nav-toggle', 'nav-menu')

// active and remove menu
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    // active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // remove menu movil
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll revive animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// scroll home
sr.reveal('.home_title', {})
sr.reveal('.button', {delay: 200});
sr.reveal('.home_img', {delay: 400});
sr.reveal('.home_social-icon', {interval: 200});

// scroll about
sr.reveal(".aboutr_img", {});
sr.reveal(".about_subtitle", { delay: 200 });
sr.reveal(".about_text", { delay: 400 });

// scroll skills
sr.reveal(".skills_subtitle", {});
sr.reveal(".skills_text", { delay: 200 });
sr.reveal(".skills_img", { delay: 400 });
sr.reveal(".skills_data", { interval: 200 });

// scroll works
sr.reveal(".work_img", { interval: 200 });

// scroll contact
sr.reveal(".contact_input", { interval: 200 });

//   const $form = document.querySelector('#form')
// $form.addEventListener('submit', handleSubmit)
// function handleSubmit(event) {
// event.preventDefault()
// const form = new FormData(this)
// trucazo.setAttribute('href', `mailto:masdeseba@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
// trucazo.click()
// }

const $form = document.querySelector('#form')
$form.addEventListener('submit', handlesubmit)

async function handlesubmit(e) {
    e.preventDefault();
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    } )
    if(response.ok) {
        this.reset()
        alert('Tu contacto llego con éxito.... Pronto me comunicaré contígo') 
    }

}