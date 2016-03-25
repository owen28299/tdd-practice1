function SquareRoots(number){

  if(typeof number !== "number"){
    return false;
  }

  if (number !== Math.floor(number) || number < 0 ) {
    return false;
  }

  var sum = 0;

  for (var i = 1; i <= number; i++){

    sum += Math.sqrt(i);

  }

  return sum;

}

module.exports = SquareRoots;

