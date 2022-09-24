// Cannot reassign this variable
const PI = 3.141568;
console.log(PI)

// Using let we can reassign value
let age = 22;
age = 23;
console.log(age);

// string literals
let myName = 'Mind Sasi';
console.log(myName);

// Arrays operations
const numbers = [1,2,3,4,5];
console.log(numbers);

numbers.push(6);
console.log(numbers);

numbers.pop();
numbers.pop();
console.log(numbers);

// Objects
const sasi = {
    name: 'Mind Sasi',
    age: 22,
    gender: 'F',
    hobbies: ['Reading', 'Eating', 'Coffee']
}

const stephen = {
    name: 'Stephen Rodrigues',
    age: 29,
    gender: 'M',
    hobbies: ['Coffee', 'Coding']
}
//Now Sasi has new hobby
sasi.hobbies.push('Coding');

console.log(sasi, stephen)

// Grouping objects
const listOfPersons = [sasi, stephen];
console.log(listOfPersons[0].gender)
