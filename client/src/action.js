export const SET_COUNTRIES = "SET_COUNTRIES"
export const SET_COUNTRY = "SET_COUNTRY"
export const SET_ACTIVITY = "SET_ACTIVITY"
export const POST_ACTIVITY = "POST_ACTIVITY"
export const SET_COUNTRY_ACTIVITY = "SET_COUNTRY_ACTIVITY"

export function getCountries(){
    return (dispatch) => {
        fetch('http://localhost:3001/countries').then(j => j.json()).then((response) => {
            dispatch({
                type:SET_COUNTRIES,
                payload:response
            });

        } )
    }
}

export function getCountry(id){
    return (dispatch) => {
        fetch(`http://localhost:3001/countries/${id}`).then(j => j.json()).then((response) => {
            dispatch({
                type:SET_COUNTRY,
                payload:response
            });

        } )
    }
}
export function getActivities(){
    return(dispatch) => {
        fetch(`http://localhost:3001/activity`).then(j => j.json()).then((response) => {
            dispatch({
                type:SET_ACTIVITY,
                payload:response
            });

        } )
    }
}
export function PostActivities(params,params2){
    console.log("aca")
    console.log(params);
    console.log(params2);
   return(dispatch) =>{ fetch(`http://localhost:3001/activity`,{
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({params:params,params2:params2}),
        
       
    }).then(j => j.json())
    .then(response =>{
        
        dispatch({
            type:POST_ACTIVITY,
            payload:response
        })
    })
}
}
export function getActivitiesCountries(){
    return(dispatch) => {
        fetch(`http://localhost:3001/activity/country`).then(j => j.json()).then((response) => {
            dispatch({
                type:SET_COUNTRY_ACTIVITY,
                payload:response
            });

        } )
    }
}
