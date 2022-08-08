//countdown
const countdown = (num) => {
  let arr = [];
  while (num >= 0){
    arr.push(num);
    num --;
  }
  return arr;
}

// console.log(countdown(10));

//print and return
const printReturn = (arr) => {
  console.log(arr[0]);
  return arr[1];
}

//first plus length
const firstPlusLength = (arr) => {
  return arr[0] + arr.length;
}

// console.log(firstPlusLength([2,3,4,5]));
// console.log(firstPlusLength(["true",2,3,4]));
// console.log(firstPlusLength([true,2,3,4]));

//value greater than second & generalized
const greaterThanSecond = (arr) => {

  let count = 0;

  if(arr.length >= 2){
    for (let i = 0; i < arr.length; i++){
      if(arr[i] > arr[1]) {
        console.log(arr[i]);
        count ++;
      }
    }
  }
  return count;
}

// console.log(greaterThanSecond([1,3,5,7,9,13]));

//this length, that value
const jinx = (num1, num2) => {
  let arr = [];
  for(let i = 0; i < num1; i++){
    arr.push(num2);
  }
  if (num1 === num2){
    console.log("jinx!");
  }
  return arr;
}

// console.log(jinx(3,3));

//fit first value
const fitFirstValue = (arr) => {
  console.log( arr[0] > arr.length
    ? "Too Big!"
    : arr[0] < arr.length
      ? "Too small!"
      : "Just right!"
  )
}

// fitFirstValue([2,0]);
// fitFirstValue([2,0,3,4]);
// fitFirstValue([3,0]);

//fahrenheit to celsius
const fahrenheitToCelsius = (fdegrees) => {
  return (fdegrees - 32) * 5 / 9;
}

// console.log(fahrenheitToCelsius(80));

//celsius to fahrenheit
const celsiusToFahrenheit = (cdegrees) => {
  return cdegrees * 9 / 5 + 32;
}

// console.log(celsiusToFahrenheit(25));