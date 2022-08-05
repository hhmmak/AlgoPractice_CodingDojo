// Push Front
const pushFront = (arr, value) => {
  arr = [value, ...arr];
  return arr;
}

// console.log(pushFront([5,7,2,3], 8)) //=> [8,5,7,2,3]
// console.log(pushFront([99], 7)) //=> [7,99]

// Push Front
const popFront = (arr) => {
  let value;
  [value, ...arr] = arr;
  console.log(arr);
  return value;
}

// console.log(popFront([0,5,10,15])) // => 0 returned, with [5,10,15] printed in the function
// console.log(popFront([4,5,7,9])) // => 4 returned, with [5,7,9] printed in the function

// Insert At
const insertAt = (arr, index, value) => {
  for (let i = arr.length; i > index; i--){
    arr[i] = arr[i - 1];
  }
  arr[index] = value;
  return arr;
}

// console.log(insertAt([100,200,5], 2, 311)) // => [100,200,311,5]
// console.log(insertAt([9,33,7], 1, 42)) // => [9,42,33,7]

// Remove At
const removeAt = (arr, index) => {
  let value = arr[index]
  for (let i = index; i < arr.length; i++){
    arr[i] = arr[i + 1];
  }
  arr.pop();
  console.log(arr);
  return value
}

// console.log(removeAt([1000,3,204,77], 1)) //=> 3 returned, with [1000,204,77] printed in the function
// console.log(removeAt([8,20,55,44,98], 3)) //=> 44 returned, with [8,20,55,98] printed in the function

// Swap Pairs
const swapPair = (arr) => {
  for (let i = 0; i < arr.length - 1; i += 2) {
    [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
  }
  return arr;
}

// console.log(swapPair([1,2,3,4])) //=> [2,1,4,3]
// console.log(swapPair(["Brendan",true,42])) //=> [true,"Brendan",42]

// Remove Duplicates
const removeDupes = (arr) => {
  for (let i = arr.length - 1; i > 0; i--){
    if (arr[i] === arr[i - 1]) {
      removeAt(arr, i);
    }
  }
  return arr;
}


console.log(removeDupes([-2,-2,3.14,5,5,10])) //=> [-2,3.14,5,10]
console.log(removeDupes([9,19,19,19,19,19,29])) //=> [9,19,29]