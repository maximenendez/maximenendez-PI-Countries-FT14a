import React from "react"
import { Link} from "react-router-dom";
import styles from "../css/CardCountry.module.css";

function CCountry(params){

    return (
        < React.Fragment key={params.id} >
        < div className={styles.card} >
            <img src={params.flag} alt="flag"  className={styles.img}  />
      
            <Link to={`/home/${params.id}`}>  <h3>{params.name}</h3> </Link> 
            {params.region ? <h1>{params.region} </h1> : <h1>Unknown</h1> }
      
        </div>
        </React.Fragment>
      
    )

}

export default CCountry;