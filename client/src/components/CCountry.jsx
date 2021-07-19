import React from "react"
import { Link} from "react-router-dom";
import styles from "../css/Home.module.css";

function CCountry(params){

    return (
        < React.Fragment key={params.id} >
        < div className={styles.card} >
            <img src={params.flag} alt="flag"  />
        <div className={styles.container}>
            <Link to={`/home/${params.id}`}>  <h1>{params.name}</h1> </Link> 
            <h1>{params.region} </h1>
        </div>
        </div>
        </React.Fragment>
      
    )

}

export default CCountry;