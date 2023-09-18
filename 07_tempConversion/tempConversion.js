const convertToCelsius = function(temp1) {
  let cel = ((temp1-32)*(5/9))*10;
  return Math.round(cel)/10;;
};

const convertToFahrenheit = function(temp2) {
  let fah = (temp2*(9/5)+32)*10;
  return Math.round(fah)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
