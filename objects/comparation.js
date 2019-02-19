const car = {
    model: "POLO",
    annual: 2018,
    manufacturer: "Volkswagem",
    value: 50.000
};

const car1 = {
    model: "POLO",
    annual: 2018,
    manufacturer: "Volkswagem",
    value: 50.000
};

let equal = true;
for (let key in car) {
    if(car[key] !== car1[key]) equal = false;
}

for (let key in car1) {
    if(car1[key] !== car[key]) equal = false;
}
console.log(equal); 
console.log(car == car1); // comparation false
console.log(car === car1) // comparation false
