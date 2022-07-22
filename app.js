function hello() {
  console.log("Wesley Dugger");
}

function sayHello(name) {
  let lastName = "Dugger";
  console.log("Hello " + name + "" + lastName + "!!");
}

function sum(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
}

function exec1() {
  //print numbers 0-20
  //except 7 & 13// != not equal to, &&= AND, ||= OR
  for (let i = 0; i < 21; i++) {
    if (i != 7 && i != 13) {
      console.log(i);
    }
  }

  let name = "";
  // show an error if namme is empty
  if (!name) {
    console.error("Name is required");
  }
}

function exec2() {
  let numbers = [123, 3, -1, 12, -123, 45, 10, 20, 203, -2, -29, 12, 123];

  //A- print every number in the array
  //B- sum all the numbers and print the result
  //C- print negative number
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    console.log(numbers[i]);
    total = total + numbers[i];

    if (number < 0) {
      console("Is negative", number);
    }
  }

  console.log(total);
}

function init() {
  console.log("Intro page!");

  hello();

  let myName = "Wesley";
  sayHello(myName); //Hello Wesley!!

  let res = sum(21, 21); //console log 42
  console.log(res);

  exec1();

  exec2();
}

window.onload = init;
