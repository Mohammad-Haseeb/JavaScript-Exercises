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
  