const homePage = () => {
    const contentDiv = document.querySelector('#content')

    const heading = document.createElement('h1');
    heading.textContent = "Carries' Restaurant"
    heading.style.cssText = "background-color:#c3883d; width: 400px; margin: 16px auto; border-radius: 8px; padding: 8px; text-align: center"

    const descP = document.createElement('p')
    descP.innerHTML = "Welcome to our restaurant where you don't just get food but love. Eat in a very peaceful enviroment. Enjoy &#128525;"
    descP.style.cssText = "background-color:#c3883d; width: 400px; margin: 16px auto; border-radius: 8px; padding: 8px; text-align: center"

    const hoursP = document.createElement('p')
    hoursP.innerHTML = "<strong>Get your food in:</strong><br> Sunday: 8am - 8pm<br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm<br>Thursday: 6am - 10pm<br>Friday: 6am - 10pm<br>Saturday: 8am - 10pm"
    hoursP.style.cssText = "background-color:#c3883d; width: 400px; margin: 16px auto; border-radius: 8px; padding: 8px; text-align: center"

    const locationP = document.createElement('p')
    locationP.innerHTML = "<strong>Find us in</strong> KKKT Kimara, Ubungo Dar es Salaam"
    locationP.style.cssText = "background-color:#c3883d; width: 400px; margin: 16px auto; border-radius: 8px; padding: 8px; text-align: center"

    contentDiv.appendChild(heading)
    contentDiv.appendChild(descP)
    contentDiv.appendChild(hoursP)
    contentDiv.appendChild(locationP)
}

export { homePage }