console.log ("Hello")

import { HashMap } from "./hashMap.js"

const test = new HashMap();

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

console.log ("length is : " + test.length());

test.set('dog', 'black')
test.set('elephant', 'white')

console.log ("length is : " + test.length());
console.log ("capacity is: " + test.capacity);

test.set('moon', 'silver')

console.log ("length is : " + test.length());
console.log ("capacity is: " + test.capacity);

console.log(test.get('dog'));           // should be 'black'
console.log(test.has('moon'));          // true
console.log(test.remove('frog'));       // true
console.log ("length is : " + test.length());           // should decrease by 1

console.log(test.keys());
console.log(test.values());

