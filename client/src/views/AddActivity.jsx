import React, { useState } from "react";
import {PostActivities} from "../action"
import { useDispatch, useSelector } from "react-redux";
import {getCountries} from "../action"
import { useEffect } from "react";
import { useRef } from "react";
import styles from "../css/AddActivity.module.css"
import { Link } from "react-router-dom";


function AddActivity(){
    const countries = useSelector((state) => state.countries );
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getCountries());
    },[dispatch])

const countrys = useRef(null);

const[send,setsend] = useState("False");

const [values,setValues] = React.useState({
    name:"",
    difficulty:1,
    duration:1,
    season:"summer",

})
const [country_activity,set_country_activity] = useState([]);

useEffect(() => {
    if(country_activity != "") alert("El pais fue agregado a la lista")
   
},[country_activity])
function handleSubmit1(e){
    
    e.preventDefault();
    if(values.name.length < 1)
        alert("El nombre no puede estar vacio")
    else if(parseInt(values.difficulty) < 1 || parseInt(values.difficulty) > 5 )
        alert("El Valor de difficulty esta fuera del permitido")
    else if(parseInt(values.duration) < 1 || parseInt(values.duration) > 5 )
        alert("El Valor de duration esta fuera del permitido")
    else if(values.season != "summer" && values.season != "winter" &&
    values.season != "autumn" && values.season != "All Seasons" && values.season != "spring" )
        alert("El Valor de season esta fuera del permitido")
    else{               
        const countries_activities = [];
        var flag;
        for (let i = 0; i < country_activity.length; i++) {
            flag = false;
           for (let j = 0; j < countries_activities.length; j++) {
                if(countries_activities[j] == country_activity[i] )
                    flag= true;
           }
            if(flag == false)
                countries_activities.push(country_activity[i])
            
        }
        console.log(countries_activities)
        dispatch(PostActivities(values,countries_activities))
        setsend("true");
    }
    
    
}
console.log(values)
return(
    <div className={styles.formulario} >
        <h1>Formulario</h1>
        <form onSubmit={handleSubmit1}>
        <div className={styles.separador} >
        <label htmlFor="">   Name of Activity:  </label>
        <input type="text" onChange={(e)=> {setValues({...values,name:e.target.value})}} />
        </div>
      
        <div className={styles.separador}>
        <label htmlFor="difficulty">Choose a difficulty:</label>
        <select id="difficulty" onChange={(e)=>  {setValues({...values,difficulty:e.target.value})}} >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>
        </div>
        <div className={styles.separador}>
        <label htmlFor="duration">Choose a duration:</label>
        <select id="duration" onChange={(e)=> {setValues({...values,duration:e.target.value})}} >
        <option value="1">1 week</option>
        <option value="2">2 weeks</option>
        <option value="3">3 weeks</option>
        <option value="4">4 weeks</option>
        <option value="5">5 weeks</option>
        </select>
        </div>
        <div className={styles.separador}>
        <label htmlFor="season">Choose a season:</label>
        <select id="season" onChange={(e)=> {setValues({...values,season:e.target.value})}} >
        <option value="summer">summer</option>
        <option value="winter">winter</option>
        <option value="spring">spring</option>
        <option value="autumn">autumn</option>
        <option value="All Seasons">All Seasons</option>
        </select>
        </div>
        <div className={styles.separador}>    
       
        <label> Choose countrys from this list:   </label> 
        <input list="countrys" name="countrys" ref ={countrys}/>  
        
        <datalist id="countrys">
            {   countries.map
                (country => (
                             <option value={country.id}>{country.name} </option>
                            ) 
                )
            }
        </datalist>
        </div>  
        <div className={styles.separador}>
        <input type="button" value="Add Country"  onClick={()=> {set_country_activity([...country_activity,countrys.current.value])}} />
        </div>
        <div className={styles.separador}>
        <input type="submit" value="Submit"  />
        </div>
        </form>
            { (send == "true") && <h1>Se envio el formulario correctamente</h1>}
       <Link to={"/home"} > <button className={styles.volver} > Back to Home Page </button></Link> 
    </div>
)
}

export default AddActivity;