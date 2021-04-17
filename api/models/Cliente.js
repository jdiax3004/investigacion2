const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clienteSchema= new Schema({
    nombre:{
        type:String,
        trim:true
    },
    apellido:{
        type:String,
        trim:true
    },
    edad:{
        type:Number,
        trim:true,
    },
    direccion:{
        type:String,
        trim:true,
    },
    celular:{
        type:Number,
        trim:true,
    }
});

module.exports = mongoose.model('Cliente',clienteSchema);