const {Country} = require ('../db');
const router = require('express').Router();
const fetch = require('node-fetch');
const { Op } = require("sequelize");


router.get("/",function(req,res,next){
 

if(req.query.hasOwnProperty("name")){
    Country.findAll({where: {
        name: {
          [Op.like]: `%${req.query.name}%`
        }
      }}).then(countries => res.status(200).json(countries)).catch(error => res.status(400).send(error))
}

else{

  Country.findAll({}).then(countries => {if(countries.length == 0 ){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(async  json => {        
       await Promise.all( json.map(  el => {
         return Country.create({ 
                 id: el.alpha3Code,
                 name: el.name,
                 flag: el.flag,
                 region:el.region,
                 capital: el.capital,
                 subregion: el.subregion,
                 area:el.area,
                 population:el.population
                 });
              }
          ))  } )
    .then( () => {
          
           Country.findAll({}).then(countrie => res.status(200).json(countrie)).catch(error => res.status(400).send(error)) 
        })

  }
  else{
    
    res.status(200).json(countries)
  }


})}})



router.get("/:idPais",function(req,res,next){
   
    Country.findByPk(req.params.idPais).then(countries =>  res.status(200).json(countries)).catch(error => res.status(400).send(error))

})



module.exports = router;
