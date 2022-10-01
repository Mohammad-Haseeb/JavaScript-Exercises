// Saturday, 1 October 2022

let message="You're invited on dinner";
let names = ["Hamza", "Saad", "Ahmad", "Imran" ]
for(const name of names){
  console.log(`${message}  ${name} at 8pm on 6-10-2022`)
}

console.log("Saad can't come")
for(let i =0;i<names.length;++i){
    if(names[i]=="Saad"){
        names[i]="Farid"
    }
    
  }


console.log("NEW LIST ")
for(const name of names){
    console.log(`${message}  ${name} at 8pm on 6-10-2022`)
  }
  
  names.unshift("Zeeshan");

 
  names.splice(names.length/2, 0, 'Daniyal');
  names.push("Zia")

  console.log("New Guests with more tables")
  for(const name of names){
    console.log(`${message}  ${name} at 8pm on 6-10-2022`)
  }

  console.log('\n I can invite only two people \n')

//   you’re sorry you can’t invite them to dinner

for(let i =0;i<names.length+2;++i){
    console.log(`sorry I can’t invite them to dinner ${names.pop()}`)
    
  }

  console.log("\n New Guests with more tables \n")
  for(const name of names){
    console.log(`You're still invited ${name} at 8pm on 6-10-2022`)
  }
  names.pop()
  names.pop()

  console.log(" \n check empty array\n")

  for(const name of names){
    console.log(`You're still invited ${name} at 8pm on 6-10-2022`)
  }