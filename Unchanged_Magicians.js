let magicians = ["Hamza", "Saad", "Ahmad", "Imran" ]

const make_great= (magicians)=>{
   let magicians_with_phrase=[]
    for(let i=0;i<magicians.length;++i){
        magicians_with_phrase[i]=`${magicians[i]}, This is my phrase`
    }
    return magicians_with_phrase;
}
console.log(make_great(magicians));