import React from "react"
import { Link } from "react-router-dom";
import styles from '../css/PreHome.module.css'

function PreHome () {
    
    
    return(
        <div className={styles.todo}>  
            
            <h3 className={styles.titulo} > Project Countries</h3>


        <Link to="Home"  ><button className={styles.button_start}>START </button></Link>
       
       

        </div>  
    )
}

export default PreHome;