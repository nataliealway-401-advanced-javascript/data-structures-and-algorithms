/**
 * Function that takes a value and inserts it into the center of an array
 * @param  {} arr
 * @param  {} value
 */
function shiftArray(arr,value) {
  let newArray = [];
  let middle = arr.length/2;
  let counter = 0;
   
  if (arr.length % 2 === 1) {
    middle += .5;
  }
   
  for (let i = 0; i <= arr.length; i++) {
    if (i !== middle) {
      newArray[i] = arr[ i + counter];
    } else {
      newArray[i] = value;
      counter--;
    }
  }
  return newArray;
}
  
module.exports = shiftArray;