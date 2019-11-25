const cars = [
  { name: "pqr", price: 10000 },
  { name: "xyz", price: 14000 },
  { name: "abc", price: 1000 },
  { name: "lmn", price: 100 },
  { name: "stu", price: 150 },
  { name: "def", price: 22230 },
  { name: "ghi", price: 100 },
  { name: "jkl", price: 10566 },
  { name: "mno", price: 100 }
];

// 01  - filter
var carprice = cars.filter(function(car) {
  return car.price <= 1000;
});
console.log(carprice);

// 02 - map
var carName = cars.map(function(car) {
  return car.name;
});
console.log(carName);

// 03 - find
var foundCar = cars.find(function(car) {
  return car.name === "abc";
});
console.log(foundCar);

//04 - foreach
cars.forEach(function(car) {
  console.log(car.name);
});

//05 - reduce
var total = cars.reduce(function(curTotal, car) {
  return car.price + curTotal;
}, 0);
console.log(total);
