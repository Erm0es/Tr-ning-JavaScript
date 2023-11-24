
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]

let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function putFruit(){
    fruit.sort()
    let oranges = fruit.slice(0, 2)
    let apples = fruit.slice(2,5)
    for(let i = 0; i < oranges.length; i++){
        orangeShelf.innerHTML = oranges
    }
    for(let i = 0; i < apples.length; i++){
        appleShelf.innerHTML = apples
    }
    console.log(oranges)
    console.log(apples)
}

putFruit()






