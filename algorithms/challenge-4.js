function calculateGrade(marks) {
  let result;
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += arr[i];
  };

  result = Math.trunc(sum / marks.length);

  if (result >= 1 && result <= 59){
    return "F";
  }
  else if(result >= 50 && result < 69) {
    return "E";
  }
  else if(result >= 60 && result < 69) {
    return "D";
  }
  else if(result >= 70 && result < 79) {
    return "C";
  }
  else if(result >= 80 && result < 89) {
    return "B";
  }
  else if(result >= 90 && result < 100) {
    return "A";
  }
  else {
  return "No mark";
 }
}
console.log(calculateGrade);
  module.exports = calculateGrade
