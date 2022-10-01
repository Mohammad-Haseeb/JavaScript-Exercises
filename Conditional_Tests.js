
const cars = [ "Civic","Ferrari","BMW" ]
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

let car1 = 'Elantra';

console.log("Is car == 'subaru'? I predict True.")

console.log(car1 == 'Elantra')
console.log("Is car != 'Ferrari'? I predict False.")

console.log(car1 == 'Civic')
console.log("String equality check ", car1.length=="s".length)
console.log("check check ", car1==car1.toLowerCase())
console.log("check ", cars.includes(car1))



let car2 = 'Civic';

console.log("Is car == 'Civic'? I predict True.")

console.log(car2 == 'Civic')

console.log("Is car == 'Ferrari'? I predict False.")

console.log(car2 == 'Ferrari')
console.log("String equality check ", car2.length==car1.length)
console.log("Lowser case check check ", car2==car1.toLowerCase())
console.log(" check ", car1==car.toLowerCase() ||  car==car2.toLowerCase())

console.log("check ", cars.includes(car2))


let car3 = 'Ferrari';

console.log("Is car == 'Ferrari'? I predict True.")

console.log(car3 == 'Ferrari')
console.log("Is car2 == 'Civic'? I predict False.")

console.log(car2 == 'Civic')
console.log("String equality check ", car2.length==car3.length)
console.log("Lowser case check check ", car3==car2.toLowerCase())
console.log(" check ", car3==car2.toLowerCase() ||  car1==car2.toLowerCase())
console.log("check ", cars.includes(car3))






let car4 = 'BMW';

console.log("Is car == 'BMW'? I predict True.")

console.log(car4 == 'BMW')
console.log("Is car4 == 'MNW? I predict False.")

console.log(car2 == car4)
console.log("String equality check ", car3.length==car4.length)
console.log("Lowser case check check ", car3==car4.toLowerCase())
console.log(" check ", car3==car4.toLowerCase() ||  car3==car2.toLowerCase())
console.log("check ", cars.includes(car4))







let car5 = 'Mercedez';

console.log("Is car == 'Mercedez'? I predict True.")

console.log(car5 == 'Mercedez')

console.log("Is car4 == 'Mercedez'? I predict False.")

console.log(car4 == car5)
console.log("String equality check ", car3.length==car5.length)
console.log("Lowser case check check ", car3==car5.toLowerCase())
console.log("check ", car3==car5.toLowerCase() ||  car3==car2.toLowerCase())
console.log("check ", cars.includes(car5))
console.log("check ", !cars.includes(car5))


