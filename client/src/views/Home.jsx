import React, { useState } from "react"
import  { useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import Countries from "../components/Countries";
import { Link} from "react-router-dom";
import { getActivities} from "../action";
import {getCountries, getActivitiesCountries } from "../action";
import styles from "../css/Home.module.css"


function Home () {
    
    const activities = useSelector((state) => state.activities );
    const Maxpaginas = useSelector((state) => state.maxPages );
    const dispatch = useDispatch();
   
    useEffect(()=> {
        dispatch(getActivities());
    },[dispatch])

    useEffect(()=> {
        dispatch(getCountries());
        dispatch(getActivitiesCountries())
    },[dispatch])

    useEffect(()=> {
       setPagAct(1)
    },[Maxpaginas])
    console.log(Maxpaginas)
    

    const [Term,setTerm] = useState("");
    const [Act,setAct] = useState("indistinto");
    const [option,setOption] = useState("Todos");
    const [poblation,setpoblation] = useState("indistinto");
    const [Ord,setOrd] = useState("Asc");
    const [PagAct,setPagAct]= useState(1);
    const countries = useSelector((state) => state.countries );

    
    return(
        <div className={styles.fondo} >  

            <div className={styles.navBar}>
            <h1>Countries</h1>
            <div className={styles.search} >
            <label  htmlFor="activity">Search by Name:</label>
           <input   type="text" placeholder="Search" onChange={(e)=> {setTerm(e.target.value)}} />

           <div className={styles.activity} >
           <Link to={`/activity`}>  <button >ADD ACTIVITIES</button> </Link>
           </div>
           </div>
           

           <label htmlFor="regions">Choose a Region:</label>

            <select id="region" onChange={(e)=> {setOption(e.target.value)}} >
            <option value="Todos">Todos</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Polar">Polar</option>
            </select>
            
            
            
            <label htmlFor="activity">Choose an Activity:</label>

            <select id="activity"  onChange={(e)=> {setAct(e.target.value)}} >
            <option value="indistinto">indistinto</option>
            {activities.map(activity => 
                <option value={activity.id}>{activity.name}</option>
            )}
            </select>
           
            <div>     
            <label htmlFor="population">Filter by population:</label>
            <select id="population" onChange={(e)=> {setpoblation(e.target.value)}} >
            <option value="indistinto">indistinto</option>
            <option value="Mayor a menor">Mayor a menor poblacion</option>
            <option value="Menor a mayor">Menor a mayor poblacion</option>
            </select>
            
            <label htmlFor="population">Filter by alphabetical order:</label>
            <select id="orden" onChange={(e)=> {setOrd(e.target.value)}} >
            <option value="Asc">A-Z</option>
            <option value="Des">Z-A</option>
            </select>

            </div>
            </div>
           
            <div className={styles.pasar} >
          { (countries.length > 0) && < Countries option={option} term={Term} pob = {poblation} ord={Ord} act ={Act} pagina= {PagAct}  />    } 
            <h1 className={styles.indice}>
            {(PagAct > 1)&& <button onClick={(e)=> {setPagAct(PagAct-1)}} > Previous </button>}
               {PagAct}                     
            {(PagAct < Maxpaginas)&& <button onClick={(e)=> {setPagAct(PagAct+1)}} > Next </button>}
            </h1>
            </div>
        </div>  
    )
}

export default Home;
