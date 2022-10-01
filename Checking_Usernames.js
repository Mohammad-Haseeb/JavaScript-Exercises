let names = ["Hamza", "Saad", "Ahmad", "Imran", "haseeb" ]
let new_names = ["H", "Saad", "Ahmad", "Imran", "haseeb" ]

for(const name of new_names){
    if(names.includes(name)){
        console.log("Enter a new Username")
    }else{
        console.log("Username is available")
    }
}