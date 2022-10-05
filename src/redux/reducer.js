import {SEARCHED_CITY, SEARCHED_DATA} from './action';

const initial = {
    searched_city:'',
    data:null
}

export const mainReducer = (store=initial, {type, payload})=>{
    switch(type){
        case SEARCHED_CITY:
            return {...store, searched_city:payload}
        case SEARCHED_DATA:
            return {...store, data:payload}
        default:
            return store;
    }
}