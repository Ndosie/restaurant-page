const contactPage = () => {
    const contentDiv = document.querySelector('#content')

    const heading = document.createElement('h1');
    heading.textContent = "Contact Us"
    heading.style.cssText = "background-color:#c3883d; width: 400px; margin: 16px auto; border-radius: 8px; padding: 8px; text-align: center"

    const contact1P = document.createElement('p')
    contact1P.innerHTML = "<strong>General Manager</strong><br> (000)-700000000 <br> gm@carrierestaurant.com"
    contact1P.style.cssText = "background-color:#c3883d; width: 400px; margin: 16px auto; border-radius: 8px; padding: 8px; text-align: center"

    const contact2P = document.createElement('p')
    contact2P.innerHTML = "<strong>Accountant</strong><br> (000)-711111111 <br> accoutant@carrierestaurant.com"
    contact2P.style.cssText = "background-color:#c3883d; width: 400px; margin: 16px auto; border-radius: 8px; padding: 8px; text-align: center"

    const contact3P = document.createElement('p')
    contact3P.innerHTML = "<strong>Chief Cook</strong><br> (000)-722222222 <br> cook@carrierestaurant.com"
    contact3P.style.cssText = "background-color:#c3883d; width: 400px; margin: 16px auto; border-radius: 8px; padding: 8px; text-align: center"

    contentDiv.appendChild(heading)
    contentDiv.appendChild(contact1P)
    contentDiv.appendChild(contact2P)
    contentDiv.appendChild(contact3P)
}

export { contactPage }