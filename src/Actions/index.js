import axios from 'axios';
const {DEMO_KEY} = process.env;


export function getRovers(){
    return async function(dispatch){
        let json = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=nZOw1rMkXECwN1tMzkRMfLHEV6IcqPWfjCy90yUZ`);
        return dispatch({
            type: 'GET_ROVERS',
            payload: json.data
        })
    }
}

export function getRoverCameras(rover){
    return async function(dispatch){
        let json = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}?api_key=nZOw1rMkXECwN1tMzkRMfLHEV6IcqPWfjCy90yUZ`);
        return dispatch({
            type: 'GET_ROVER_CAMERAS',
            payload: json.data
        })
    }
}

export function getPhotosSol(rover, sol, page){
    return async function(dispatch){
        let json = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&page=${page}&api_key=nZOw1rMkXECwN1tMzkRMfLHEV6IcqPWfjCy90yUZ`);
        return dispatch({
            type: 'GET_PHOTOS_SOL',
            payload: json.data
        })
    }
}

export function getPhotos(rover, sol, page, camera){
    return async function(dispatch){
        let json = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&page=${page}&camera=${camera}&api_key=nZOw1rMkXECwN1tMzkRMfLHEV6IcqPWfjCy90yUZ`);
        return dispatch({
            type: 'GET_PHOTOS',
            payload: json.data
        })
    }
}

export function getPhotosDate(rover, date, page){
    return async function(dispatch){
        let json = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&page=${page}&api_key=nZOw1rMkXECwN1tMzkRMfLHEV6IcqPWfjCy90yUZ`);
        return dispatch({
            type: 'GET_PHOTOS_DATE',
            payload: json.data
        })
    }
}