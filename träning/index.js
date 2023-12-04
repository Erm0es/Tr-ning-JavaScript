const container = document.getElementById("container-el");

container.innerHTML += "<button onclick='buy()'>Buy!</button>";

function buy(){
    container.innerHTML += "<p>Thank you for buying</p>"
};


const recipient = "James"
const sender = "Emelie"

//const email = "Hey " + recipient + "! How is it going? Cheers Per"
const email = `
"Hey "${recipient }"! 
How is it going? 
Cheers ${sender}"`

console.log(email)