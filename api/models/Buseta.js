const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const Schema = mongoose.Schema;

const busetaSchema= new Schema({
    numero_buseta:{
        type:String,
        trim:true
    },
    asientos:{
        type:Number,
        trim:true
    },
    clientes: [
        { type: ObjectId, ref: 'Cliente' }
    ],
    modelo:{
        type:String,
        trim:true,
    }
});

module.exports = mongoose.model('Buseta',busetaSchema);