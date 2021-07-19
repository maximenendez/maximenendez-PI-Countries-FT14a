import React, { useState } from "react"
import  { useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import Countries from "../components/Countries";

import { getActivities } from "../action";



function Home () {
    
    const activities = useSelector((state) => state.activities );
    const dispatch = useDispatch();
   
    useEffect(()=> {
        dispatch(getActivities());
    },[dispatch])

    const [Term,setTerm] = useState("");
    const [Act,setAct] = useState("indistinto");
    const [option,setOption] = useState("Todos");
    const [poblation,setpoblation] = useState("indistinto");
    const [Ord,setOrd] = useState("Asc");
    
    const [PagAct,setPagAct]= useState(1);

    return(
        <div>  
            <h3>Paises</h3>
           <input type="text" placeholder="Search" onChange={(e)=> {setTerm(e.target.value)}} />

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
            <div>
            
            
            <label htmlFor="activity">Choose an Activity:</label>

            <select id="activity"  onChange={(e)=> {setAct(e.target.value)}} >
            <option value="indistinto">indistinto</option>
            {activities.map(activity => 
                <option value={activity.id}>{activity.name}</option>
            )}
            </select>
           


            <select id="population" onChange={(e)=> {setpoblation(e.target.value)}} >
            <option value="indistinto">indistinto</option>
            <option value="Mayor a menor">Mayor a menor poblacion</option>
            <option value="Menor a mayor">Menor a mayor poblacion</option>
            </select>

            <select id="orden" onChange={(e)=> {setOrd(e.target.value)}} >
            <option value="Asc">A-Z</option>
            <option value="Des">Z-A</option>
            </select>

            </div>

            < Countries option={option} term={Term} pob = {poblation} ord={Ord} act ={Act} pagina={PagAct}  />
            
            {
            (PagAct > 1)&& <button onClick={(e)=> {setPagAct(PagAct-1)}} > Anterior </button>}
                
                <button onClick={(e)=> {setPagAct(PagAct+1)}} > Siguiente </button>
            
             
        </div>  
    )
}

export default Home;
