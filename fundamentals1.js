//Setting and Swapping
const settingAndSwapping = (myNumber = 42, myName = "Alice") =>{
  [myNumber, myName] = [myName, myNumber];
  console.log(`myNumber = ${myNumber}`);
  console.log(`myName = ${myName}`);
  
}

// settingAndSwapping();

//print -52 to 1066
const print = (initial = -52, final = 1066) => {
  for (let i = initial; i <= final; i++) {
    console.log(i);
  }
}

// print();

//dont' worry, be happy
const beCheerful = () => {
  for (let i = 0; i < 98; i++){
    console.log("good morning!");
    
  }
}

// beCheerful();

//multiples of three - but not all
const multiplesOfThreeWithSkip = () => {
  for (let i = -300; i < 0 ; i++){
    (i !== -3 || i !== -6) && (!(i % 3)) &&
      console.log(i);
  }
}

// multiplesOfThreeWithSkip();

//print with while
const printWhile = () => {
  let count = 2000;
  while (count <= 5280){
    console.log(count);
    count ++;
  }
}

// printWhile();

//You say it's your birthday
const birthday = (a, b) => {
  let [x, y] = [12, 20];
  if ((a === x && (a === y || b === y)) || (a === y && (a === x || b === x))){
    console.log("How did you know?")
  } else {
    console.log("Just another day...")
  }

}

// birthday(12, 20);
// birthday(20, 12);
// birthday(12, 12);
// birthday(20, 20);
// birthday(11, 30);

//Leap Year
const leapYear = (year) => {
  let isLeapYear = false;
  if (!(year % 4) && (year % 100)) {
    isLeapYear = true;
  } else if (!(year % 400)) {
    isLeapYear = true;
  }
  return isLeapYear;
}

// console.log(
//   leapYear(2000),
//   leapYear(2100),
//   leapYear(100),
//   leapYear(2016)
// );

//print and count
const multipleFiveTotal = () => {
  let count = 0;
  for (let i = 512; i <= 4096; i++){
    if ((i % 5) === 0) {
      console.log(i);
      count ++;
    }
  }
  return count;
}

// console.log(multipleFiveTotal());

//multiple of six
const multipleSixWhile = (num = 0) => {
  while (num <= 60000) {
    if ((num % 6) === 0) {
      console.log(num);
    }
    num ++;
  }
  return num;
}

// console.log(multipleSixWhile());

//counting, dojo way
const countingDojo = () => {
  for (let i = 1; i <= 100; i++) {
    if (!(i % 5)) {
      console.log("Coding");
    }
    if (!(i % 10)) {
      console.log("Dojo")
    }
  }
}

// countingDojo();

//what do you know?
const printParam = (sentence) => {
  console.log(sentence);
}

// printParam("What Do You Know?");

//Whoa, that sucker's huge
const hugeSum = () => {
  let sum = 0;
  for (let i = 0; i <= 300000; i++){
    if (i % 2) {
      sum += i;
    }
  }
  sum += (sum * -1)
  console.log(sum);
}

// hugeSum();

//Countdown by Fours
const countdownFours = (num = 2016) => {
  if (num <= 0 ){
    return null;
  } else {
    console.log(num);
    countdownFours(num - 4);
  }
}

// countdownFours();

//flexible countdown
const flexCountdown = (lowNum, highNum, mult) => {
  while (lowNum < highNum){
    if (!(highNum % mult)) {
      console.log(highNum);
    }
    highNum --;
  }
}

// flexCountdown(2,9,3);

//final countdown
const finalCountdown = (param1, param2, param3, param4) => {
  while (param2 < param3){
    if (!(param2 % param1) && param2 !== param4){
      console.log(param2);
    }
    param2 ++;
  }
}

finalCountdown(3,5,17,9);