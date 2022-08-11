//sigma
const sigma = (num) => {
  if (num <= 0) {
    return 0;
  }
  return sigma(num - 1) + num;
}

// console.log(sigma(5));
// console.log(sigma(3));


//factorial
const factorial = (num) => {
  if (num <= 1){
    return 1;
  }
  return factorial(num - 1) * num;
}

// console.log(factorial(5));
// console.log(factorial(3));

//star art
class StarArt{
  drawLeftStars(num){
    let field = "";
    for (let i = 1; i <= num; i++){
      field = field + "*";
    }
    for (let i = num + 1; i <= 75; i++){
      field = field + " ";
    }
    console.log(field);
  }
  drawRightStars(num){
    let field = "";
    for (let i = 1; i < (75 - num); i++){
      field = field + " ";
    }
    for (let i = (75 - num); i <= 75; i++){
      field = field + "*";
    }
    console.log(field);
  }

  drawCenteredStars(num){
    let field = "";
    for (let i = 1; i <= 75; i++){
      if ((i > Math.ceil((75-num)/2)) && (i < Math.ceil((75-num)/2) + num)) {
        field = field + "*";
      } else {
        field = field + " ";
      }
    }
    console.log(field);
  }
}

// let star1 = new StarArt();
// star1.drawLeftStars(30);
// star1.drawCenteredStars(30);
// star1.drawRightStars(30);

//character art
class CharacterArt{
  drawLeftChars(num, char){
    let field = "";
    for (let i = 1; i <= num; i++){
      field = field + char;
    }
    for (let i = num + 1; i <= 75; i++){
      field = field + " ";
    }
    console.log(field);
  }
  drawRightChars(num, char){
    let field = "";
    for (let i = 1; i < (75 - num); i++){
      field = field + " ";
    }
    for (let i = (75 - num); i <= 75; i++){
      field = field + char;
    }
    console.log(field);
  }

  drawCenteredChars(num, char){
    let field = "";
    for (let i = 1; i <= 75; i++){
      if ((i > Math.ceil((75-num)/2)) && (i < Math.ceil((75-num)/2) + num)) {
        field = field + char;
      } else {
        field = field + " ";
      }
    }
    console.log(field);
  }
}

let art1 = new CharacterArt();
art1.drawLeftChars(30, "a");
art1.drawCenteredChars(30, "b");
art1.drawRightChars(30, "c");
