const ftoc = function(fahrenheit) {
  // this includes all the various math steps
  //return ((Math.round(((fahrenheit-32)*5/9)*10))/10);
  //this one is simplified; 4 sig figs chosen for simplification
  return (Math.round((fahrenheit-32)*5.555)/10);
};

const ctof = function(celsius) {
  return (Math.round(((celsius*9/5)+32)*10)/10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
