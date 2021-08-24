import React, { useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import CCountry from "./CCountry";
import {SetPages } from "../action";
import styles from "../css/countries.module.css"

function Countries(params){
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries );
    const country_activity = useSelector((state)=> state.country_activity)
   
    var pagina = params.pagina;
    var paises = countries;    
    var paises_filtrados = [];
    console.log(params.pagina)
    useEffect(()=> {
       
        dispatch(SetPages(Math.ceil((paises.length / 10))))
    },[paises,paises_filtrados])
   
    if(params.term != "")
    {
        paises = paises.filter((val)=>{
            if (val.name.toLowerCase().includes(params.term.toLowerCase())){
                console.log("entro?")
                return val;
            }
                }
        
        )
       
        for (let i = (pagina * 10) - 10; i < pagina*10; i++) {
            if(paises[i] != undefined)
            paises_filtrados.push(paises[i])
            
        }
        
        
   
    if(paises_filtrados.length > 0)
    return(<div> {
    paises_filtrados.map(country => (
        < CCountry id={country.id} flag={country.flag} name={country.name} region={country.region} key={country.id}  />
    ) ) }</div>)  
    else return <div class={styles.noencontrado} ><h1>No hay paises con ese nombre</h1></div>

    }
    if(params.option != "Todos"){
        {paises = countries.filter((val)=>{
            if (val.region.toLowerCase().includes(params.option.toLowerCase()))
                return val;}
            
        )  }
    
    }

    if(params.act != "indistinto"){
    var ids = [];
        for (let i = 0; i < paises.length; i++) {
        for (let j = 0; j < country_activity.length; j++) {
            
            if(paises[i].id == country_activity[j].countryId && country_activity[j].activityId== params.act )
                {  
                    ids.push(paises[i])
                }
        }
            
        }
        paises = ids;
        if(paises.length < 1)
        return <div class={styles.noencontrado} ><h1>No hay paises con ese actividad</h1></div>
    
    }

    if(params.pob == "indistinto" && params.ord == "Asc")  
        paises.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) 
    else if (params.pob == "indistinto" && params.ord == "Des")  
        paises.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))

        else if (params.pob == "Mayor a menor") 
        paises.sort((a,b) => ( a.population < b.population ) ? 1 : (( b.population <a.population) ? -1 : 0))

        else if (params.pob == "Menor a mayor")  
        paises.sort((a,b) => ( a.population > b.population ) ? 1 : (( b.population >a.population) ? -1 : 0))
        
       
        if((Math.ceil((paises.length / 10))) <= params.pagina)
        pagina= 1;
        for (let i = (pagina * 10) - 10; i < pagina*10; i++) {
            if(paises[i] != undefined)
            paises_filtrados.push(paises[i])
            
        }
        
        
   console.log("aca aca aca");
   console.log(paises_filtrados)
    if(paises_filtrados.length > 0)
    return(<div> {
    paises_filtrados.map(country => (
        < CCountry id={country.id} flag={country.flag} name={country.name} region={country.region} key={country.id}  />
    ) ) }</div>)   

    
}
export default Countries;