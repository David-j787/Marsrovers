const initialState = {
    rovers: [],
    roverCameras: [],
    photos: []
}




function rootReducer(state = initialState, action){
    if(action.type === 'GET_ROVERS'){
        return{
            ...state,
            rovers: action.payload
        }
    }
    if(action.type === 'GET_ROVER_CAMERAS'){
        return{
            ...state,
            roverCameras: action.payload
        }
    }
    if(action.type === 'GET_PHOTOS'){
        return{
            ...state,
            photos: action.payload
        }
    }
    if(action.type === 'GET_PHOTOS_SOL'){
        return{
            ...state,
            photos: action.payload
        }
    }
    if(action.type === 'GET_PHOTOS_DATE'){
        return{
            ...state,
            photos: action.payload
        }
    }
    else{
        return state;
    }
}



export default rootReducer;