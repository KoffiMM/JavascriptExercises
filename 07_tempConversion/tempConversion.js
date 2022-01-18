const ftoc = function(farenheit) {

let celsius=5/9;

let result=(farenheit-32)*celsius;
let roundedCelsius=Math.round(result * 10) / 10
return roundedCelsius
}
const ctof = function(celsius) {
  let farenheit=9/5
  let result=(celsius*farenheit)+32;
  let roundedFarenheit=Math.round(result * 10) / 10
  return roundedFarenheit
 
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
