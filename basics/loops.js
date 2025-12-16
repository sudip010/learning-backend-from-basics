const numbers = [5,10,15,20];

console.log("for-ofloop:");
for (const n of numbers) {
    console.log(n);
}

const car ={
    brand: "toyota",
    model:"corolla",
    year:2020
};
console.log("for-in loop:");
for(const key in car){
    console.log(key,"=",car[key]);
}