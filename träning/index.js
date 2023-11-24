
let randomAge = Math.floor(Math.random()* 100 + 1);


let age = randomAge;
let ticketprize = "";

if(age < 6 ){
    ticketprize = "free";
}else if(age > 6 && age <= 17){
    ticketprize = "Child discount"
}else if(age >= 18 && age <= 26){
    ticketprize = "Student discount"
}else if (age >= 27 && age <= 66){
    ticketprize = "Full price"
}else if (age >= 66){
    ticketprize = "Senior discount"
} else{
    console.error("Try again")
}

console.log(randomAge);
console.log(ticketprize);
