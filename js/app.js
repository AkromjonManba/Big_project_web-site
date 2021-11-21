window.addEventListener('DOMContentLoaded', ()=> {
    // window.onscroll = () => {
    //     if(window.scrollY > 80) {
    //         document.querySelector('.navbar .nav-menu-rek').classList.add('active')
    //     }else {
    //         document.querySelector('.navbar .nav-menu-rek').classList.remove('active')
    //     }
    // }

    // window.onload = () => {
    //     if(window.scrollY > 80) {
    //         document.querySelector('.navbar .nav-menu-rek').classList.add('active')
    //     }else {
    //         document.querySelector('.navbar .nav-menu-rek').classList.remove('active')
    //     }
    // }

    let menuBtn = document.querySelector('#menu-btn'),
        navbar = document.querySelector('.nav-menu');

        menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('fa-times')
        navbar.classList.toggle('active')
    })

    const faqs = document.querySelectorAll('.faq')

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('active')
        })
    })
})

// function RemoveAcrdion(){
//     faqs.forEach(faq => {
//         faq.addEventListener('click', () => {
//             faq.classList.remove('active')
//         })
//     })
// }