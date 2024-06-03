let name = prompt("Please Enter Your Name: ");
let gender = prompt("Gender: ").toUpperCase();
let orderType;

if (gender == "male".toUpperCase()) 
    alert("Welcome Mr."+name);
else if (gender == "female".toUpperCase()) 
    alert("Welcome Ms." + name);
else
    alert("Welcome "+name);

if (confirm("Do you want to order?\n (Donuts/ Coffee/ Ice Cream/ Bakery )")) {
    orderType = prompt("What do you want to order " + name + "?");
    alert("Your order is getting prepared");
}

console.log("Name: "+name+" order: "+ orderType);