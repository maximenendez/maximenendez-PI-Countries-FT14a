const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const country = require('./country');
const activity = require('./activity');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// server.get("/countries",function(req,res){
   
// })

router.use("/countries", country ) 
router.use("/activity",  activity)

// server.get("/countries/{idPais}",function(req,res){
   
// })
// server.get("/countries?name",function(req,res){
   
// })
// server.post("/activity",function(req,res){
   
// })

module.exports = router;
