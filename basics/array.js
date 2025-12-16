const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);
numbers.push(8);
const even = numbers.filter(n => n % 2 === 0);
console.log(even);
numbers.pop();
console.log(numbers);