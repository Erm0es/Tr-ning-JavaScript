let snus = ["Daquiri", "Licorice fusion", "Spearmint"]

function getRandomSnus() {
    let random = Math.floor(Math.random()* snus.length)
    return snus[random]
}

console.log(getRandomSnus())