export function loadPosts (data){
 return {
    type : "LOAD_POSTS", 
    payload : data 
 }
 };
 
//  export function deleteUser(data){
//     return{
//       type : "DELETE_USER",
//       payload : data
//     }
//  }
 
 export function selectedPost(obj){
    return{
       type : "SELECTED_POST",
       payload : obj
    }
 }
 
 export function operation(obj){
    return{
       type : "OPERATION",
       payload : obj
    }
 }
 
 export function likePost(obj){
    return{
       type : "LIKE_POST",
       payload : obj
    }
 }