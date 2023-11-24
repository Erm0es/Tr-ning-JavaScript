
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage-el")
let fightButton = document.getElementById("fight-button");

fightButton.addEventListener("click", function(){
    let random = Math.floor(Math.random() * fighters.length)
    let random2 = Math.floor(Math.random() * fighters.length)
    stageEl.innerHTML = fighters[random] + " VS " + fighters[random2]
    return fighters[random]

})
