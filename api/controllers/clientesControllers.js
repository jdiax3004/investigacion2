const Cliente = require('../models/Cliente');

//[GET ALL]
exports.lista = async (req, res) => {
    try {
        const Clientes = await Cliente.find();
        res.json(Clientes);
    } catch (error) {
        res.status(400).send(error);
    }
}

//[GET / ID]
exports.seleccionado = async (req, res, next) => {
    try {
        const id = req.params.id;
        const Cliente = await Cliente.findById(id);
        if (!Cliente) {
            res.status(404).json({
                mensaje: 'El Cliente no existe'
            })
        }
        res.json(Cliente);

    } catch (error) {
        res.status(400).send(error);
        next();
    }

}

//[POST]
exports.agregar = async (req, res) => {
    const cliente = new Cliente(req.body);
    try {
        await cliente.save();
        res.json({ mensaje: 'Se creo un nuevo Cliente!' })
    } catch (error) {
        res.status(400).send(error);
    }
}

//[PUT]
exports.actualizar = async (req, res) => {
    try {
        const id = req.params.id;
        const Cliente = await Cliente.findOneAndUpdate(
            { _id: id },
            req.body,
            { new: true }
        );
        res.json({ mensaje: 'Se actulizo el Cliente: ' + id })
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//[DELETE]
exports.eliminar = async (req, res) => {
    try {
        const id = req.params.id;
        const Cliente = await Cliente.findOneAndDelete(
            { _id: id }
        );
        res.json({ mensaje: 'Se Elimino el Cliente: ' + id })
    } catch (error) {
        res.status(400).send(error.message);
    }
}