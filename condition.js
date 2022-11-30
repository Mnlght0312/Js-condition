//Assignment - 2, Task-2

let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3; //true
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false
console.log(ii, iv, v, vi, vii, iix, ix, x, xi);

//Assignment - 1, Task - 2

let one = 4 > 3 && 10 < 12; //true
let two = 4 > 3 && 10 > 12; //false
let three = 4 > 3 || 10 < 12; //true
let four = 4 > 3 || 10 > 12; //true*
let five = !(4 > 3); //false
let six = !(4 < 3); //true
let eight = !(4 > 3 && 10 < 12); //false*
let nine = !(4 > 3 && 10 > 12); //true*
let ten = !(4 === "4"); //true
console.log(one, two, three, four, five, six, eight, nine, ten);

//Assignment - 1, Task - 3

let AgeInput = prompt("Насаа оруулна уу:");
let myAge = 23;
if (myAge < AgeInput) {
    console.log("ta nadaas ah");
} else if (myAge == AgeInput) {
    console.log("hoyuulaa chatsuu");
}
else {
    console.log("chi nadaas duu");
}

//Assignment - 1, Task - 4



