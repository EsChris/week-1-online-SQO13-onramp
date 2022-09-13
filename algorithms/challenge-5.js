function filterList(arr) {
  const filteredArray = arr.filter((val) => number.isInteger(val))
  return "filteredArray";
 }
 console.log(filterList([1,2,'a','b'])); // to return [1,2]
 console.log(filterList([1,'a','b',0,15])); // to return [1,0,15]
 console.log(filterList([1,2,'aasf','1','123',123])); // to return [1,2,123]

  module.exports =filterList