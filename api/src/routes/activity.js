const {Activity,country_activity} = require ('../db');
const router = require('express').Router();
const fetch = require('node-fetch');
const { Op } = require("sequelize");


router.post("/",function(req,res,_next){
   
    Activity.create({
                    name:req.body.params.name,
                    difficulty:req.body.params.difficulty,
                    duration:req.body.params.duration,
                    season:req.body.params.season,})

.then( (idActivity) =>{
    
        if(req.body.params2.length > 0){
            req.body.params2.map( c =>
                country_activity.create({
                    countryId: c, activityId:idActivity.id }) 
            )
            
        }
               
                    })                    
.then( () =>{
    res.status(200).json("creado exitosamente")
})

})
router.get("/",function(_req,res){
    Activity.findAll().then(activity => res.status(200).json(activity)).catch(error => res.status(400).send(error))
})

router.get("/country",function(_req,res){
    country_activity.findAll().then(activity => res.status(200).json(activity)).catch(error => res.status(400).send(error))
})

module.exports = router;

