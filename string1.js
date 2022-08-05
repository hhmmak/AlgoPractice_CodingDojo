const removeBlanks = (str) => {
  let newStr = "";
  for(let i = 0; i < str.length; i++){
    if (str[i] != " ") {
      newStr += str[i]
    }
  }
  return newStr;
}

// console.log(removeBlanks(" Pl ayTha tF u nkyM usi c ")) //=> "PlayThatFunkyMusic"
// console.log(removeBlanks("I can not BELIEVE it's not BUTTER")) //=> "IcannotBELIEVEit'snotBUTTER"

const getDigits = (str) => {
  let newStr = "";
  for(let i = 0; i < str.length; i++){
    if (!isNaN(str[i])) {
      newStr += str[i]
    }
  }
  return newStr;
}

// console.log(getDigits("abc8c0d1ngd0j0!8")) //=> 801008
// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")) //=> 1357924680

const acronym = (str) => {
  let newStr = "";
  let arr = str.split(" ")
  for (let item of arr){
    if (item.length > 0){
      newStr += item.toUpperCase()[0]
    }
  }
  return newStr;
}

// console.log(acronym(" there's no free lunch - gotta pay yer way. ")) //=> "TNFL-GPYW". 
// console.log(acronym("Live from New York, it's Saturday Night!")) //=> "LFNYISN".

const countNonSpaces = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      count ++;
    }
  }
  return count
}

// console.log(countNonSpaces("Honey pie, you are driving me crazy")) //=> 29
// console.log(countNonSpaces("Hello world !")) //=> 11

const removeShorterStrings = (arr, minLen) => {

  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i].length >= minLen) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)) //=> ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)) //=> ['There', 'bug', 'the', 'system']