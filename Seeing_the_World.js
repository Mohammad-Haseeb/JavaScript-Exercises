let place = ["Makkah and Mdina", "Antelope Canyon", "Santorini", "Norway", "New Zealand"]
const place2 = [...place].sort();


for(let i =0;i<place2.length;++i){
    console.log(place2[i])
}


console.log("Unorderd : ",place)

console.log("\nReverse order :\n")
for(let i =place2.length-1;i>=0;--i){
    console.log(place2[i])
}


console.log("Unorderd : ",place)


place.reverse()

console.log("Reverse : ",place)


place.reverse()

console.log("Un-Reverse : ",place)


// place.reverse()

console.log("Sorte : ",place.sort())
console.log("Sorted Reverse : ",place.sort().reverse())

