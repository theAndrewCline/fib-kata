function main(num) {

  function fibonacci_series(n) {
    if (n === 1) {
      return [0, 1];
    }
    else {
      var s = fibonacci_series(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }


  };


  var fibarray = fibonacci_series(100);
  if (num < 0) {
    console.log("Number cant be negative");
  }
  else {
    
    return fibarray[num]; 
  }


}
main(5);
module.exports = main
