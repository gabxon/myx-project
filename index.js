const prompt = require("prompt-sync")();
let statement = prompt("Enter name: ")
if(statement === "Tinubu")
    {console.log("You are welcome my president")}
  else if(statement === "Shettima")
    {console.log("you are welcome my vice president")
} else if(statement === "Akpabio")
    {console.log("you are welcome my senate president")
} else if(statement === "Obi")
    {console.log("You are welcome Sir")
} else if(statement === "Sowore")
    {console.log("You are welcome Sir")
} else if(statement === "Nameless")
    {console.log("Wrong place")
} else if (statement === "Thank you")
    {console.log("you are welcome")
} else (
    console.log("You are not Authorized to be here")
)

let age = prompt("Enter Age: ");
if (age >= 18){
    console.log("you are eligible to vote")
} else if(age< 12){
    console.log("you are too young to vote")
} else if(age>=15 && age < 18){
    console.log("you are almost eligible to vote, please wait for a few more years")
} else{
    console.log("you are not eligible to vote")
}

 let result = prompt("Voting Results: ");
  if(result === "lekki"){
    console.log("Apc-5000, Pdp-3000, Lp-1000, Adc-2000")
} else if(result === "ikeja"){
    console.log("Apc-6000, Pdp-1000, Lp-3000, Adc-2500")
} else{
    console.log("Come back for final results")
}

