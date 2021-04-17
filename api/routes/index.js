const express = require('express');

const router = express.Router();

const busetasController = require('../controllers/busetasControllers');
const clientesControllers = require('../controllers/clientesControllers');



module.exports= function(){
    //Busetas
    router.get('/busetas',busetasController.lista);
    router.get('/busetas/:id',busetasController.seleccionado);
    router.post('/busetas',busetasController.agregar);
    router.put('/busetas/:id',busetasController.actualizar);
    router.delete('/busetas/:id',busetasController.eliminar);
    //Clientes
    router.get('/clientes',clientesControllers.lista);
    router.get('/clientes/:id',clientesControllers.seleccionado);
    router.post('/clientes',clientesControllers.agregar);
    router.put('/clientes/:id',clientesControllers.actualizar);
    router.delete('/clientes/:id',clientesControllers.eliminar);
    return router;
}


