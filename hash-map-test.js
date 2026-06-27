import { hashMap } from './hashMap.js';

const test = hashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.displayCapacity());
test.set('ice cream', 'brown');
console.log(test.displayCapacity());

test.set('moon', 'silver');
console.log(test.displayCapacity());
console.log(test.length());
console.log(test.entries());
