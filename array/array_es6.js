//-- ES6 @@iterator
// In ES6 Array class has a property named @@iterator
let numbers = ['a', 'b', 'c', 'd', 'e'];
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value); //1
console.log(iterator.next().value); //2
console.log(iterator.next().value); //3
console.log(iterator.next().value); //4
console.log(iterator.next().value); //5

// The entries() method returns @@iterator, which contains key/value pairs
let aEntries = numbers.entries(); //retrieve iterator of key/value
console.log(aEntries.next().value); //[0, 1] - position 0, value 1
console.log(aEntries.next().value); //[1, 2] - position 1, value 2
console.log(aEntries.next().value); //[2, 3] - position 2, value 3

// The keys() method returns @@iterator, which contains keys
let aKeys = numbers.keys(); //retrieve iterator of keys
console.log(aKeys.next()); // {value: 0, done: false }
console.log(aKeys.next()); // {value: 1, done: false }
console.log(aKeys.next()); // {value: 2, done: false }

// 
let aValues = numbers.values();
console.log(aValues.next()); // {value: 1, done: false }
console.log(aValues.next()); // {value: 2, done: false }
console.log(aValues.next()); // {value: 3, done: false }


//-- find and findIndex
//  find() and findIndex() receive a callback function that will search
//      for avalue that satisfied the condition presented in the tesint function
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function multipleOf13(element, index, array) {
    return (element % 13 == 0) ? true : false;
}
console.log(numbers.find(multipleOf13));
console.log(numbers.findIndex(multipleOf13));

//-- includes() returns true in case the element is found in array
let numbers2 = [7, 6, 5, 4, 3, 2, 1];
console.log(numbers2.includes(4, 5));