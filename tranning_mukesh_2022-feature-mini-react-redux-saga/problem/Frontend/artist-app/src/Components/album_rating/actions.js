export function loadImages(data){
    console.log("data");
    return {
        type : "LOAD_IMAGES",
        payload : data
    }
}

export function selectedUserRatings(data){
    console.log(data, "Action wla data");
    return{
        type : "USER_RATING_ACTION",
        payload : data
    }
}