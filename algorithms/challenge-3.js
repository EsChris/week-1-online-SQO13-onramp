function sumMix(arr) {
   let result = 0;
   for (let i = 0; i < arr.length; i++) {
    result += parseInt(arr[i]);
   }
   return result;
 }
 console.log(sumMix([9, 3, '7', '3'])) //to return 22
 console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])); //to return 42
 console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])); //to return 41
  module.exports = sumMix