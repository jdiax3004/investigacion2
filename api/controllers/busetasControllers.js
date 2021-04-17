const Buseta = require('../models/Buseta');

//[GET ALL]
exports.lista = async (req, res) => {
    try {
        const Busetas = await Buseta.find();
        res.json(Busetas);
    } catch (error) {
        res.status(400).send(error);
    }
}

//[GET / ID]
exports.seleccionado = async (req, res, next) => {
    try {
        const id = req.params.id;
        const Buseta = await Buseta.findById(id);
        if (!Buseta) {
            res.status(404).json({
                mensaje: 'La Buseta no existe'
            })
        }
        res.json(Buseta);

    } catch (error) {
        res.status(400).send(error);
        next();
    }

}

//[POST]
exports.agregar = async (req, res) => {
    const Buseta = new Buseta(req.body);
    try {
        await Buseta.save();
        res.json({ mensaje: 'Se creo un nuevo Buseta!' })
    } catch (error) {
        res.status(400).send(error);
    }
}

//[PUT]
exports.actualizar = async (req, res) => {
    try {
        const id = req.params.id;
        const Buseta = await Buseta.findOneAndUpdate(
            { _id: id },
            req.body,
            { new: true }
        );
        res.json({ mensaje: 'Se actulizo la Buseta: ' + id })
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//[DELETE]
exports.eliminar = async (req, res) => {
    try {
        const id = req.params.id;
        const Buseta = await Buseta.findOneAndDelete(
            { _id: id }
        );
        res.json({ mensaje: 'Se Elimino la Buseta: ' + id })
    } catch (error) {
        res.status(400).send(error.message);
    }
}