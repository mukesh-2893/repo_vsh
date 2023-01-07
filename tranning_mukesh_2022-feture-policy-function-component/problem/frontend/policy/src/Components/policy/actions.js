export function loadPolicies (data){
    console.log("load users in actions")
 return {
    type : "LOAD_POLICIES", 
    payload : data 
 }
 };
 
 export function deletePolicy(data){
    return{
      type : "DELETE_POLICY",
      payload : data
    }
 }
 
 export function selectedPolicy(obj){
    return{
       type : "SELECTED_POLICY",
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
       type : "UPDATE_POLICY",
       payload : obj
    }
 }