function countTruthy(arr) {

    let truthy_count = 0;
    for (let i = 0; i < arr.length; i++) {
    const value = arr[i]; 
        if(value) {
          truthy_count++;
        }
  }  
    return truthy_count;
}
console.log(countTruthy([6, 3, 0, 30, 7])); 
console.log(countTruthy(['', 3, 0, 30, 7]));
console.log(countTruthy(['', 0, 0, undefined, 7]));

module.exports = countTruthy
