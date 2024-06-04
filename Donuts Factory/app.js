let name = prompt("Please Enter Your Name: ");
let gender;
let orderType;

while (true) { 
    gender = prompt("Gender: ").toUpperCase();
    if (gender == "male".toUpperCase()) {
        alert("Welcome Mr." + name);
        break
    }
    else if (gender == "female".toUpperCase()) {
        alert("Welcome Ms." + name);
        break;
    }
}

if (confirm("Do you want to order?\n (Donuts/ Coffee/ Ice Cream/ Bakery )")) {
    orderType = prompt("What do you want to order " + name + "?");
    alert("Your order is getting prepared");
}

console.log("Name: " + name + " order: " + orderType);

let orderArr = [name, gender, orderType]
for (let i = 0; i < orderArr.length; i++) {
        console.log(orderArr[i]);
    
}
let arrNum = [0, 1, 2, 3, 4, 5]

// Q7: Use a loop to display the numbers 0 through 5, each in a separate alert window.
for (let i = 0; i<=5; i++) {
    alert(arrNum[i]);
}

// Q8: Use a loop to display the numbers 0 through 5 in a single alert window
alert(arrNum);

// Q9: Use a loop to display the numbers in the range 0…20 that are multiples of 3. 
let multiThree = []
for (let i = 1; i <= 20; i++)
    if (i%3==0)
        multiThree.push(i);
alert(multiThree);

//Q10: Prompt the user for a number in the range 0…100.  
//If the number is out of range, display an error message and prompt again until a valid number is entered.
//Assume the user enters a number each time
let userNum = +prompt("Enter a number between 0-100")
while (true) 
    if (userNum>=0 && userNum<=100)
        break;
userNum = +prompt("Error, Please enter a number between 0-100")

//Q11: Prompt for an integer, then display the sum of the integers from 0 through the number entered
let n = +prompt("Please enter a number to display the sum from 0 to that number");
let sum=0;
for (let i = 0; i <=n; i++) {
    sum += i;
}
alert(sum);