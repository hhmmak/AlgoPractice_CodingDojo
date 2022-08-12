//Rockin' the Dojo Sweatshirt
const sweatshirtPricing = (num) => {
  let price = 20;
  if (num === 1) {
    return price;
  } else if (num === 2) {
    return Math.round(price * 2 * (1 - 0.09));
  } else if (num === 3) {
    return Math.round(price * 3 * (1 - 0.19));
  } else {
    return Math.round(price * num * (1 - 0.35));
  }
}

//clock hand angles, revisited
const clockHandAngles = (seconds) => {
  let secondsOnClock = seconds % 60;
  let minutes = seconds / 60;
  let minutesOnClock = minutes % 60;
  let hours = minutes / 60;
  let hoursOnClock = hours % 12;
  let days = hours / 24;
  let daysOnClock = days % 7;

  return `Week hand: ${Math.floor(daysOnClock * 360 / 7)} degs. Hour hand: ${Math.floor(hoursOnClock * 360/12)} degs. Minute hand:${Math.floor(minutesOnClock * 360/60)} degs. Second hand: ${Math.floor(secondsOnClock * 360/60)} degs.`

}


