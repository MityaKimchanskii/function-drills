////////////////// PROBLEM 1 //////////////////////////////////////////////////////////////////////////////////////////
/*
  Create a function called helloWorld which simply console logs 'Hello, World!'
  Call the function.
*/

//CODE HERE
function helloWorld(){
  console.log('Hello, World!')
}
helloWorld()


////////////////// PROBLEM 2 //////////////////////////////////////////////////////////////////////////////////////////
/*
  Create a function called printName which takes in a person's name and console logs it.
  Ex. If 'Cameron' were passed in as the argument, Cameron would be console logged.
  Call the function, passing in an argument.
*/

//CODE HERE
function printName(name){
  console.log(name)
}
printName('Sam')


////////////////// PROBLEM 3 ///////////////////////////////////////////////////////////////////////////////////////////
/*
  Create a function called greeting that
  accepts name as its only parameter.
  Convert the name param into a string.
  greeting should log the string 'Hello, '
  plus the value of the name parameter.
  Ex. If Jake were passed in as the argument, the function would log 'Hello, Jake'
  Make sure to call your function and pass in an argument.
*/

//CODE HERE
function greeting(name){
    let convName = String(name)
    console.log('Hello,'+ name + '!')
}
greeting('Tom')


////////////////// PROBLEM 4 ///////////////////////////////////////////////////////////////////////////////////////////
/*
  Create a function called add that takes in two parameters 
  Inside, convert the arguments to be numbers (just in case strings get sent in)
  The add function should RETURN the two parameters added together.
  Create a variable outside the function called 'sum' and set it equal to add invoked (called), passing in 2 arguments.
*/

//CODE HERE
function add(param1, param2){
    return Number(param1) + Number(param2)
}
let sum = add("5", "7")
console.log(sum)



////////////////// PROBLEM 5 //////////////////////////////////////////////////////////////////////////////////////////////
/*
  Write a function called nameCheck that takes in a name parameter.
  nameCheck should check if the name equals 'Steven'. If it does, return 'What is up Steven?'
  If the name parameter is equal to Bryan, return 'Hey Bryan!'
  If the name parameter is anything else, return 'Cool name, NAMEPARAM' 
  (with NAMEPARAM being the value of the name parameter being passed in).
  Create a variable called 'nameGreeting' and set it equal to your function 
  invoked (called) passing in an argument.
*/

//CODE HERE
function nameCheck(NAMEPARAM){
    let nameToString = String(NAMEPARAM)
    if (nameToString === "Steven") {
      return (`What is up Stven?`)
    } else if (nameToString === "Bryan") {
      return (`Hey Bryan!`)
    } else {
      return (`Cool name ${nameToString}`)
    }
}

let nameGreeting = nameCheck('Sam')
console.log(nameGreeting)


////////////////// PROBLEM 6 ////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Write a function called faveColorFinder that takes in one parameter called color (which will be a string).
  If the passed in color equals 'red', return 'red is a great color'
  If the passed in color equals 'green', return 'green is a solid favorite color'
  If the passed in color equals 'black', return 'so trendy'
  Otherwise, you should return the string 'you need to evaluate your favorite color choice'
  Create a variable called 'colorRating' and set it equal to faveColorFinder invoked (called), passing in an argument.
*/

//CODE HERE
function faveColorFinder(color){
  switch (color) {
    case 'red': console.log('red is a great color');
      break;
    case 'green': console.log('green is a solid favorite color');
      break;
    case 'black': console.log('so trendy');
      break;
    default: console.log('you need to evaluate your favorite color choice')
  }
}
let colorRating = faveColorFinder('white')


////////////////// PROBLEM 7 //////////////////////////////////////////////////////////////////////////////////////////////////
let namesArr = ['Cameron', 'Riley', 'Eric', 'Brenna', 'Karl']
/*
  Create a function called printAllNames that takes in a single argument (an array of names).
  Using a for loop, iterate over that array and console log each name.
  Call the function, passing in the `namesArr` array (above).
*/

//CODE HERE
function printAllNames(arr) {
    for (let i = 0; i < arr.length ; i++) {
    console.log(arr[i]);
  }
}
printAllNames(namesArr)


////////////////// PROBLEM 8 //////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Create a function called thatsOdd that takes in a single argument (a number).
  Using conditional logic, if the number is even, return 'That's not odd!'
  Otherwise, return 'That is odd indeed!'
  Outside the function, create a variable called `oddChecker` and set it 
  equal to your function invoked, making sure to pass in an argument.
*/

//CODE HERE
function thatsOdd(number) {
  if (number % 2 !== 0) {
    return ('That is odd indeed!')
  } else {
    return (`That's not odd!`)
  }
}
let oddChecker = thatsOdd(2)
console.log(oddChecker)


////////////////// PROBLEM 9 ///////////////////////////////////////////////////////////////////////////////////////////////////
let bigOrSmallArray = [1,101, 102, 2, 103, 4, 5, 6, 107]
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr',  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string to the answers array. 
  Return the answers array inside of the function to a variable called `arrayEvaluator`.
*/

//CODE HERE
function bigOrSmall(arr){
  let answers = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 100){
      answers.push('big')
    } else {
      answers.push('small')
    }
  }
  let arrayEvaluator = answers
  return arrayEvaluator
}
bigOrSmall(bigOrSmallArray)

////////////////// PROBLEM 10 ////////////////////////////////////////////////////////////////////////////////////////////////////
let contestants = ['Katniss', 'Peeta', 'Fox-face', 'Glimmer', 'Cato', 'Rue', 'Thresh', 'Clove', 'Marvel']
let loser = 'Glimmer'
/*
  Write a function that is called theEliminator, which takes in two arguments, contestants 
  (which will each be an array of strings), and loser (which will be a string).
  The function should loop over the array of contestant names. If the loser 
  string appears in the array, splice it out. Return the new contestants array.
*/

//CODE HERE
function theEliminator(contestants, loser){
  for (let i = 0; i < contestants.length; i++){
    if (loser === contestants[i]){
      contestants.splice(i, i - (i-1))
      console.log(contestants)
    } else {
        false
    }
  }
}
theEliminator(contestants, loser)


////////////////// PROBLEM 11 ////////////////////////////////////////////////////////////////////////////////////////////////////
let sampleString = "Hi, my name is Kylo."

/*
  Write a function that takes in one argument, a string. The function 
  hould then console.log that string, in entirely uppercase characters.
  Invoke the function, passing in the sampleString (above).
*/

//CODE HERE
function str(argString){
  console.log(argString.toUpperCase())
}
str(sampleString)


////////////////// PROBLEM 12 /////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Write a function called emailCheck that takes in
  one parameter - email.
  Inside the function, convert the email param into 
  a string and trim off any excess .
  Check to make sure the email contains an '@' symbol.
  If it does, return 'email verified' and if doesn't, 
  return 'must provide a valid email address'
*/

//CODE HERE
let str111 = "  He  l  l  o  Wo  rld @ret .com!  ";

function emailCheck(email){
  let trimStr = String(email)
  trimStr = email.replace(/\s+/g, '');
  // console.log(trimStr);
  if (trimStr.includes('@')){ 
      return `${trimStr}, ': email verified!'`
    } else {
      return `${trimStr}, ': must provide a valid email address!'`
    }
}
let t = emailCheck(str111)
console.log(t)


////////////////// PROBLEM 13 //////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Write a function, naming it whatever you believe to be appropriate, that buys as many chocolate 
  frogs as possible with a certain amount of gold. Each costs 3 gold. Your function 
  should take in a single parameter, which is the amount of gold you are willing to spend. Your 
  function should return a total amount of chocolate frogs you were able to purchase. Create a 
  variable called `totalFrogs` and set it equal to your function invoked, passing in the amount of 
  gold you are willing to spend.
*/

//CODE HERE
function loveChocolate(gold){
  let chocolateFrog = 3
  return `You bought: ${gold/chocolateFrog} chocolate frogs.`
}
let totalFrogs = loveChocolate(20)
console.log(totalFrogs)



////////////////// PROBLEM 14 ///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  You might have noticed a slight bug in problem 12. If you were to pass in 4 gold, the 
  function would return to you 1.3333... However, you can't really go to a store and 
  by 1.333 products. You would just be able to purchase 1 product. Re-write the function 
  you used in problem 12 (give it the same name, just add a 2 to the end of it) that fixes 
  this bug. Invoke the function and store the returned value to a variable called `totalFrogs2`.
*/

//CODE HERE
function loveChocolate2(gold){

  let chocolateFrog = 3
  
  if (gold % chocolateFrog === 0){
    console.log('You bought:',gold/chocolateFrog, 'chocolate frogs.')
  } else if (gold < chocolateFrog){
    console.log("You don't have enough gold.")
  } else if (gold > chocolateFrog && gold % chocolateFrog != 0) {
    let remainder = gold % chocolateFrog
    let wholeFrogs = (gold - remainder) / chocolateFrog 
    console.log('You bought:', wholeFrogs , 'chocolate frogs and your change is:', gold % chocolateFrog, 'gold.')
  } else {
    false
  }
}
let totalFrogs2 = loveChocolate2(8)


////////////////// PROBLEM 15 ////////////////////////////////////////////////////////////////////////////////////////////////////////
let sampleArray = [0,1,2,3,4,5,6,8,9]
/*
  Write a function that takes in an array of numbers as an argument. In the body of the function, 
  write logic to determine if the array is in ascending order. The function should return true, if 
  it is sorted in ascending order, false if it is not. Create a variable, `arrayIsAscending` and 
  set it equal to your function invoked. Use the sample array to test this function.
*/

//CODE HERE
function arrayCheckAscend(array1){
  for (let i = 0; i < array1.length - 1; i++) {
    for (let j = i + 1; j < array1.length; j++) {
      if (array1[i] < array1[j] === true) {
        //console.log(array1[i], '<', array1[j])
        return 
      } else {
        //console.log(array1[i], '>', array1[j])
        return false
      }
    }
  }
}
let arrayIsAscending = arrayCheckAscend(sampleArray)
console.log(arrayIsAscending)



////////////////// PROBLEM 16 ////////////////////////////////////////////////////////////////////////////////////////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

/*
  There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck.
  All within different scopes.
  Given the functions and variables above, edit the arrays below to contain only the appropriate variable names (as strings).
*/

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ["duck"]

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ["duck", "rubberDuck"]

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ["duck", "sailorDuck", "rubberDuck"]

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ["duck", "realDuck"]