import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router';
import {getCountry} from '../action'
import AddActivity from './AddActivity';

function Country(){
    const country = useSelector(state => state.country);
    const dispatch = useDispatch();
    const {id} = useParams()

    useEffect(() => {
        dispatch(getCountry(id))
    },[id, dispatch])

return (

    <div>
        <h3>Code:{country.id}</h3>
        <h3>Name:{country.name}</h3>
        <img src={country.flag} alt="flag" />
        
        <h3>Region:{country.region}</h3>
        <h3>Capital:{country.capital}</h3>
        <h3>Subregion:{country.subregion}</h3>
        <h3>Area:{country.area}</h3>
        <h3>Population:{country.population}</h3>
        < AddActivity />
    </div>
   

)

}

export default Country