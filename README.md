# Investigación II
Investigación II - Diseño Web - REST API & MERN

Importante recalcar que la base de datos que utiliza se llama Lab12 y que el servidor corre en el puerto 5001 ya que estaba utilizando el 5000. Otro dato es que necesita clientes para que las busetas funcionen idealmente

## Creación de la base de datos

```javascript
npm install
npm start
```

```javascript
use lab12
db.createCollection('busetas')
db.createCollection('clientes')
db.clientes.insert({
    nombre: "Jose",
    apellido: "Alberto",
    edad: 22,
    direccion: "Cartago",
    celular: 22222222
})
db.busetas.insert({
    numero_buseta: 102,
    asientos: 18,
    clientes: [],
    modelo: "Susuki"
    })
```
