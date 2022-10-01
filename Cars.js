
const car_properties=(manufacturer_name,modal_name,color,optional)=>{
    if(optional!=undefined){
  return {manufacturer_name,modal_name,color,optional}
    }
  return {manufacturer_name,modal_name,color}
    
}
console.log(car_properties("Honda","2012","black"))
console.log(car_properties("Honda","2012","black",{"condition":"good"}))
