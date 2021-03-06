import {SET_COUNTRIES,SET_COUNTRY,SET_ACTIVITY,POST_ACTIVITY,SET_COUNTRY_ACTIVITY,SET_PAGES} from "./action"
 
const inicialState = {
    countries: [],
    country: [],
    activities: [],
    country_activity:[],
    maxPages:1,
}

export default function reducer (state = inicialState,action) {
    switch(action.type){
        case SET_COUNTRIES: return{
            ...state,
            countries:action.payload   
        }
        case SET_COUNTRY: return{
            ...state,
            country:action.payload   
        }
        case SET_ACTIVITY: return{
            ...state,
            activities:action.payload
        }
        case POST_ACTIVITY: return state
        case SET_COUNTRY_ACTIVITY: return{
            ...state,
            country_activity:action.payload
        }
        case SET_PAGES: return{
            ...state,
            maxPages:action.payload
        }
        default : return state
    }
}