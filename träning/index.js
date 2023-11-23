let min = 1
let max = 7

function randomNumber(){
 let r = Math.floor(Math.random() * (max - min) + min)
 return r
}

r = randomNumber();
console.log(r)