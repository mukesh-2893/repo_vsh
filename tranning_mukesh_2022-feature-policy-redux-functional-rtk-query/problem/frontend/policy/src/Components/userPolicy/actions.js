export function loadUP (data){
 return {
    type : "LOAD_UP", 
    payload : data 
 }
 };
 
 export function deletePolicy(data){
    return{
      type : "DELETE_UP",
      payload : data
    }
 }
 
 export function selectedUP(obj){
    return{
       type : "SELECTED_UP",
       payload : obj
    }
 }
 
 export function operation(obj){
    return{
       type : "OPERATION",
       payload : obj
    }
 }
 
 export function update(obj){
    return{
       type : "UPDATE_UP",
       payload : obj
    }
 }

 export function claim(obj){
   return{
      type : "LOAD_CLAIM",
      payload : obj
   }
 }