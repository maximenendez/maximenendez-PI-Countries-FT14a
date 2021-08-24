import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router';
import styles from "../css/Country.module.css"
import { getActivitiesCountries ,getActivities,getCountry } from "../action";
import { Link } from 'react-router-dom';


function Country(){
    const country = useSelector(state => state.country);
    const dispatch = useDispatch();
    const {id} = useParams()

    const country_activity = useSelector((state)=> state.country_activity)
    const activities = useSelector((state) => state.activities );
    var actividades_filtradas = [];


    useEffect(() => {
        dispatch(getCountry(id))
        dispatch(getActivitiesCountries())
        dispatch(getActivities());

    },[id, dispatch])


            var actividades  = [];
           
            for (let i = 0; i < country_activity.length; i++) {
                  
                  if(country.id == country_activity[i].countryId )
                    {   
                        actividades.push(country_activity[i])
                        
               }
                
            }
            console.log(actividades)
            for (let i = 0; i < activities.length; i++) {
                
                for (let j = 0; j < actividades.length; j++) {
                    
                    if(activities[i].id == actividades[j].activityId )
                    actividades_filtradas.push(activities[i])
                }
                
            }

return (

    <div className={styles.card}  >


        <div  className={styles.separador1}>  <img src={country.flag} alt="flag" className={styles.img}/>   </div>
        <div className={styles.separador2}> 
        <h3>Code:{country.id}</h3>
        <h3>Name:{country.name}</h3>
       
        <h3>Region:{country.region}</h3>
        <h3>Capital:{country.capital}</h3>
        <h3>Subregion:{country.subregion}</h3>
        <h3>Area:{country.area} Km2</h3>
        <h3>Population:{country.population} millions</h3>
        </div>
        <div className={styles.actividad}>
        <h1>ACTIVITIES</h1>
        { actividades_filtradas.length != 0?  actividades_filtradas.map(activity => 
           
                <div  >
                <table className={styles.tabla}>
                <tr>
                    <th>Name</th>
                    <th>Difficulty</th>
                    <th>Duration weeks</th>
                    <th>Season</th>
                </tr>
                <tr>
                    <td> {activity.name}</td>
                    <td> {activity.difficulty}</td>
                    <td> {activity.duration}</td>
                    <td> {activity.season}</td>
                </tr>
                </table>
                 </div>
            ): <h1>Has not related activities</h1> }  
       </div>

       <Link to={"/home"} > <button className={styles.volver} > Back to Home Page </button></Link> 
    </div>
   
)

}

export default Country