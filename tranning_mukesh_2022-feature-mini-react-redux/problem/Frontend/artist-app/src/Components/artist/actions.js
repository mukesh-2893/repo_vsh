export function loadArtist (data){
    // console.log("load artist")
 return {
    type : "LOAD_ARTIST" , 
    payload : data 
 }
};

export function selectedArtist (obj){
 return {
    type : "SELECTED_ARTIST",
    payload : obj 
 }
};

export function operation (data){
    console.log(data)
 return {
    type : "OPERATION" , 
    payload : data 
 }
};
