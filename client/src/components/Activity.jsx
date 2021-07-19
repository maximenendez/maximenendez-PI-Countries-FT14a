import React, { useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import { getActivities } from "../action";

function Activity (){
    const activities = useSelector((state) => state.activities );
    const dispatch = useDispatch();
   
    useEffect(()=> {
        dispatch(getActivities());
    },[dispatch])

    return(  
        <div>
            <label htmlFor="activity">Choose an Activity:</label>

            <select id="activity" >
            <option value="indistinto">indistinto</option>
            {activities.map(activity => 
                 <option value={activity.name}>{activity.name}</option>
            )}
            </select>
        </div>
    )

}

export default Activity;