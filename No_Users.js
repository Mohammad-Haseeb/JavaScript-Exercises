let age_of_persons=[22,34,6,77]
// let age = 22;
for(const age of age_of_persons){

if(age<2){
    console.log("person is baby")
}
else if(age>=2 && age<4){
    console.log("person is toddler")
    
}

else if(age>=4 && age<13){
    console.log("person is kid")
    
}

else if(age>=12 && age<20){
    console.log("person is teenage")
    
}
else if(age>=20 && age<65){
    console.log("person is adult")
    
}
else if(age>=65){
    console.log("person is elder")
    
}
}
age_of_persons =[]
if(age_of_persons.length==0){
    console.log("We need to find some users")
}