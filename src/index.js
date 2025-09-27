import "./styles.css"
import { homePage } from "./home"
import { menuPage } from "./menu"
import { contactPage } from "./contact"

const btns = document.querySelectorAll('.nav-btn')
const contentDiv = document.querySelector('#content')

btns.forEach((button) => {
    button.addEventListener('click', (e) => {
        contentDiv.textContent = ''
        const btnId = e.target.id
        e.target.classList.toggle('active')

        btns.forEach((button) => {
            if(button.id !== btnId)
            {
                button.classList.remove('active')
            }
        })

        switch(btnId) {
            case 'home':
                homePage()
                break
            case 'menu':
                menuPage()
                break
            case 'contact':
                contactPage()
                break
        }
    })
})

homePage()