import React, { useState } from "react";
import {PostActivities} from "../action"
import { useDispatch, useSelector } from "react-redux";
import {getCountries} from "../action"
import { useEffect } from "react";
import { useRef } from "react";


function AddActivity(){
    const countries = useSelector((state) => state.countries );
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getCountries());
    },[dispatch])

const countrys = useRef(null);
const [values,setValues] = React.useState({
    name:"",
    difficulty:"",
    duration:"",
    season:"",

})
const [country_activity,set_country_activity] = useState([]);

useEffect(() => {
    if(country_activity != "") alert("El pais fue agregado a la lista")
    console.log(country_activity)
},[country_activity])
function handleSubmit1(e){
    console.log(country_activity)
    e.preventDefault();
    dispatch(PostActivities(values,country_activity))
    
}

return(
    <div>
        <form onSubmit={handleSubmit1}>
        <label> 
        Name of Activity:
        <input type="text" onChange={(e)=> {setValues({...values,name:e.target.value})}} />
       
        <label htmlFor="difficulty">Choose a difficulty:</label>
        <select id="difficulty" onChange={(e)=>  {setValues({...values,difficulty:e.target.value})}} >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>

        <label htmlFor="duration">Choose a duration:</label>
        <select id="duration" onChange={(e)=> {setValues({...values,duration:e.target.value})}} >
        <option value="1">1 week</option>
        <option value="2">2 weeks</option>
        <option value="3">3 weeks</option>
        <option value="4">4 weeks</option>
        <option value="5">5 weeks</option>
        </select>

        <label htmlFor="season">Choose a season:</label>
        <select id="season" onChange={(e)=> {setValues({...values,season:e.target.value})}} >
        <option value="summer">summer</option>
        <option value="winter">winter</option>
        <option value="spring">spring</option>
        <option value="autumn">autumn</option>
        <option value="All Seasons">All Seasons</option>
        </select>

        </label>
        
        
        <label>
        Choose countrys from this list:
        <input list="countrys" name="countrys" ref ={countrys}/>  
        </label>   
        <datalist id="countrys" >
            {
            countries.map(country => (
                <option value={country.id}>{country.name} </option>
            ) )         
            }
        
        </datalist>
        <input type="button" value="Add Country"  onClick={()=> {set_country_activity([...country_activity,countrys.current.value])}} />
        

        <br />

        <input type="submit" value="Submit"  />
        </form>
        <br /> <br /> <br />
    </div>
)
}

export default AddActivity;