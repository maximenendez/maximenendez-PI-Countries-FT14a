import React, { useEffect, useState} from "react"
import {useDispatch,useSelector} from "react-redux"
import {getCountries} from "../action"
import CCountry from "./CCountry";
import { getActivitiesCountries } from "../action";

function Countries(params){
    const countries = useSelector((state) => state.countries );
    const dispatch = useDispatch();

    const country_activity = useSelector((state)=> state.country_activity)
    var pagina = params.pagina;
    useEffect(()=> {
        dispatch(getCountries());
        dispatch(getActivitiesCountries())
    },[dispatch])
   var paises = countries
   var paisesid = [];
   console.log(paises);
if(params.term != "")
 return(<div> {countries.filter((val)=>{
    if (val.name.toLowerCase().includes(params.term.toLowerCase()))
        return val;}
    
)  
.map(country => (
    < CCountry id={country.id} flag={country.flag} name={country.name} region={country.region} key={country.id}  />
) ) }</div>)     



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
   
}

// var retorno = [];
// if(params.pob == "indistinto" && params.ord == "Asc")  
//      paises.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) 
//    else if (params.pob == "indistinto" && params.ord == "Des")  
//      paises.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))

//     else if (params.pob == "Mayor a menor") 
//       paises.sort((a,b) => ( a.population < b.population ) ? 1 : (( b.population <a.population) ? -1 : 0))

//     else if (params.pob == "Menor a mayor")  
//        paises.sort((a,b) => ( a.population > b.population ) ? 1 : (( b.population >a.population) ? -1 : 0))

//     retorno = paises;
//     console.log(paises)
//     for (let i = (pagina-1)*15; i < pagina; i++) return(<div> {
//         < CCountry id={paises[i].id} flag={paises[i].flag} name={paises[i].name} region={paises[i].region} key={paises[i].id} />
        
//     } </div>)
if(params.pob == "indistinto" && params.ord == "Asc") return(<div> {
    paises.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(country => (
        < CCountry id={country.id} flag={country.flag} name={country.name} region={country.region} key={country.id} />
    ) ) }</div>)
   else if (params.pob == "indistinto" && params.ord == "Des")  return(<div> {
    paises.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0)).map(country => (
        
        < CCountry id={country.id} flag={country.flag} name={country.name} region={country.region} key={country.id}/>
    )  ) }</div>)
    else if (params.pob == "Mayor a menor")  return(<div> {
        paises.sort((a,b) => ( a.population < b.population ) ? 1 : (( b.population <a.population) ? -1 : 0)).map(country => (
                
            < CCountry id={country.id} flag={country.flag} name={country.name} region={country.region} key={country.id}/>
        )  )
         }</div>)
    else if (params.pob == "Menor a mayor")  return(<div> { 
        paises.sort((a,b) => ( a.population > b.population ) ? 1 : (( b.population >a.population) ? -1 : 0)).map(country => (
            
        < CCountry id={country.id} flag={country.flag} name={country.name} region={country.region} key={country.id}/>
    )  )
         }</div>)
}
export default Countries;

