import food0Img from "./images/food0.webp"
import food1Img from "./images/food1.webp"
import food2Img from "./images/food2.webp"
import food3Img from "./images/food3.webp"
import food4Img from "./images/food4.webp"
import food5Img from "./images/food5.webp"
import food6Img from "./images/food6.webp"
import food7Img from "./images/food7.webp"

const menuPage = () => {
    const contentDiv = document.querySelector('#content')
    const foods = ['Pizza', 'Crisp Chiken', 'Pan Cakes', 'Pizza', 'Egg', 'Smoked Meat', 'Smoked Pizza', 'Fruits']
    const prices = ['30,000tsh', '10,000tsh', '2,000tsh', '25,000tsh', '5,000tsh', '20,000tsh', '35,000tsh', '3,000tsh']

    const heading = document.createElement('h1');
    heading.textContent = "Menu"
    heading.style.cssText = "background-color:#c3883d; width: 400px; margin: 16px auto; border-radius: 8px; padding: 8px; text-align: center"

    const cardsDiv = document.createElement('div')
    cardsDiv.style.cssText = "display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));gap: 15px; align-items:center"
    for (let i = 0; i < foods.length; i++) {
        const cardDiv = document.createElement('div')
        cardDiv.style.cssText = "background-color:#c3883d; width: 300px; border-radius: 8px; padding:8px"

        const img = document.createElement('img')
        img.style.cssText = "border-radius: 8px;"
        img.width = '300'
        img.src = food0Img

        const nameP = document.createElement('p')
        //nameP.style.cssText = "position:absolute; bottom: 0; left: 0"
        nameP.textContent = foods[i]

        const priceP = document.createElement('p')
        //priceP.style.cssText = "position:absolute; bottom: 0; right: 0"
        priceP.textContent = prices[i]

        cardDiv.appendChild(img)
        cardDiv.appendChild(nameP)
        cardDiv.appendChild(priceP)
        cardsDiv.appendChild(cardDiv)
    }

    contentDiv.appendChild(heading)
    contentDiv.appendChild(cardsDiv)
}

export { menuPage }