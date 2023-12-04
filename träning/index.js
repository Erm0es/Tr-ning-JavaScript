const container = document.getElementById("container-el");

container.innerHTML += "<button onclick='buy()'>Buy!</button>";

function buy(){
    container.innerHTML += "<p>Thank you for buying</p>"
};
