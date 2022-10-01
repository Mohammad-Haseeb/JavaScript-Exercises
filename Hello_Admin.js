let names = ["Hamza", "admin" , "Saad", "Ahmad", "Imran" ]
for(const name of names){
    console.log(`Hello  ${name} whould you like see status report`)
  }

  // second part
console.log("\nSecond part\n")
  for(const name of names){
    if(name==='admin'){
    console.log(`Hello  ${name} whould you like see status report`)
    }
    else{
    console.log(`Hello  ${name} thank you for logging in again`)

    }  
}
  