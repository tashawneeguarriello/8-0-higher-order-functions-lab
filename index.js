/**
 * Returns the first element in the array that causes the callback to return `true`. Otherwise, returns `undefined`.
 * @param {*[]} array - An array of elements. Could be anything!
 * @param {function} callback - A callback that accepts a single argument. Returns a value.
 * @returns {*|undefined} The first element that causes the callback to return a truthy value. Otherwise, returns `undefined`.
 *
 * EXAMPLE:
 *  find([1, 2, 3], (element) => element > 1);
 *  //> 2
 *
 * EXAMPLE:
 *  find([1, 2, 3], (element) => element < 0);
 *  //> undefined
 */
//map always pushes a TRANSFORMED VERSION
function find(array, callback) {
  for (let element of array) {
    // Write your code here.

    if (callback(element)) {
      return element;
    }
  }

  return undefined;
}
//similiar to filter but we are not worried about push into an array
//example: function getDinoById(dinosaurs, Id) {
//for (const dinosaur of dinosaurs) {
//function getDinoById(dinosaurs, id//
//if(dinosaur.dinoID === id) {
//return dinosaurs.find(dinosaurs) =>
//}

/**
 * Returns an array of all elements in the array that cause the callback to return `true`. If the array is empty or no elements cause the callback to return `true`, then return an empty array.
 * @param {*[]} array - An array of elements. Could be anything!
 * @param {function} callback - A callback that accepts a single argument. Returns a value.
 * @returns {*[]} An array of filtered values. Potentially empty.
 *
 * EXAMPLE:
 *  filter([1, 2, 3], (element) => element > 1);
 *  //> [2, 3]
 *
 * EXAMPLE:
 *  filter([1, 2, 3], (element) => element < 0);
 *  //> []
 */
//filter operation asks does it match our test and then pushes it for example: filter (filter[]) then push it in without changing it
function filter(array, callback) {
  const result = [];
  for (let element of array) {
    // Write your code here.

    if (callback(element) === true) result.push(element);
  }
  return result;
}

//another filter example:
//const someNumbers
/**
 * Returns an array where each element is transformed by the callback. If the array is empty, return an empty array.
 * @param {*[]} array - An array of elements. Could be anything!
 * @param {function} callback - A callback that accepts a single argument. Returns a value.
 * @returns {*[]} An array of transformed elements. The length of this array should be the same as the inputted array.
 *
 * EXAMPLE:
 *  map([1, 2, 3], (element) => element + 10);
 *  //> [11, 12, 13]
 *
 * EXAMPLE:
 *  map([], (element) => element < 0);
 *  //> []
 */
function map(array, callback) {
  const result = [];
  for (let element of array) {
    // Write your code here.
    result.push(callback(element));
  }
  return result;
}
map([1, 2, 3], (element) => element + 10);
//return result;

/**
 * Does not return anything. Passes each element of the array into the callback along with the index and the array, in that order.
 * @param {*[]} array - An array of elements. Could be anything!
 * @param {function} callback - A callback that accepts three arguments: element, index, and the entire array.
 *
 * EXAMPLE:
 *  forEach([10, 20, 30], (element, index, array) => {
 *    console.log(element, index, array.length)
 *  });
 *  //> 10 0 3
 *  //> 20 1 3
 *  //> 30 2 3
 */
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    // Write your code here.
    let result = array[i];
    callback(result, i, array);
  }
}

// Do not change the code below this line.
module.exports = { find, filter, map, forEach };
