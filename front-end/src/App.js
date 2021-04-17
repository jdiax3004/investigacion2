import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useState } from "react";

function App() {
  
  const [cliente, setcliente] = useState({});

  // CRUD USUARIO

  async function obtenerUsuario() {
    await axios.post("http://localhost:5001/clientes", cliente);
    alert("Cliente creado");
  }
  async function crearUsuario() {
    await axios.post("http://localhost:5001/clientes", cliente);
    alert("Cliente creado");
  }

  async function actualizarUsuario() {
    await axios.put("http://localhost:5001/clientes", cliente);
    alert("Cliente actualizado");
  }

  async function eliminarUsuario() {
    await axios.delete("http://localhost:5001/clientes", cliente);
    alert("Cliente eliminado");
  }

  // CRUD BUSETA

  const [buseta, setbuseta] = useState({});

  async function obtenerBuseta() {
    await axios.post("http://localhost:5001/busetas", cliente);
    alert("Cliente creado");
  }

  async function crearBuseta() {
    await axios.post("http://localhost:5001/busetas", cliente);
    alert("Buseta creado");
  }

  async function actualizarBuseta() {
    await axios.put("http://localhost:5001/busetas", cliente);
    alert("Buseta actualizado");
  }

  async function eliminarBuseta() {
    await axios.delete("http://localhost:5001/busetas", cliente);
    alert("Buseta eliminado");
  }

  return (
    <>

      <Container className="p-3">
        <Alert variant="info">
          <Alert.Heading>🧪 Julián Diaz - Investigación II</Alert.Heading>
        </Alert>
        <Card body><h3 className="header">Busetas</h3></Card>
        <hr></hr>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Introduzca el ID en caso de actualizar" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Número de Buseta</Form.Label>
            <Form.Control type="text" placeholder="Introduzca el número" onChange={(e) =>
                setbuseta({ ...buseta, numero_buseta: e.target.value })
              }
              value={buseta.numero_buseta} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Asientos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduzca el número de asientos"
              onChange={(e) =>
                setcliente({ ...buseta, asientos: e.target.value })
              }
              value={buseta.asientos}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduzca la marca de la microbus"
              onChange={(e) =>
                setbuseta({ ...buseta, modelo: e.target.value })
              }
              value={buseta.modelo}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Clientes</Form.Label>
            <Form.Control as="select">
              <option>Seleccione Clientes...</option>
            </Form.Control>
          </Form.Group>
          <Button variant="success" type="submit" onClick={(e) => {
              e.preventDefault();
              crearBuseta();
            }} >
            Añadir Buseta
          </Button>{'   '}
          <Button variant="info" type="button" onClick={(e) => {
              e.preventDefault();
              actualizarBuseta();
            }}
          >
            Editar Buseta
          </Button>{'   '}
        </Form>
        <br></br>
          <Card body><h3 className="header">Clientes</h3></Card>
        <hr></hr>
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Introduzca el ID en caso de actualizar" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduzca el nombre"
              onChange={(e) =>
                setcliente({ ...cliente, nombre: e.target.value })
              }
              value={cliente.nombre}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduzca el apellido"
              onChange={(e) =>
                setcliente({ ...cliente, apellido: e.target.value })
              }
              value={cliente.apellido}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduzca la edad"
              onChange={(e) => setcliente({ ...cliente, edad: e.target.value })}
              value={cliente.edad}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduzca la direccion"
              onChange={(e) =>
                setcliente({ ...cliente, direccion: e.target.value })
              }
              value={cliente.direccion}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Celular</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduzca el celular"
              onChange={(e) =>
                setcliente({ ...cliente, celular: e.target.value })
              }
              value={cliente.celular}
            />
          </Form.Group>
          <Button
            variant="success"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              crearUsuario();
            }}
          >
            Añadir Cliente
          </Button>{'   '}
          <Button variant="info" type="button"
            onClick={(e) => {
              e.preventDefault();
              actualizarUsuario();
            }} >
            Editar Cliente
          </Button>{'   '}
        </Form>
        <br></br>
          <Card body><h3 className="header">Eliminar</h3></Card>
        <hr></hr>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Introduzca el ID"  />
          </Form.Group>
          <Button variant="danger" type="button"
            onClick={(e) => {
              e.preventDefault();
              eliminarUsuario();
            }}>
            Eliminar Cliente
          </Button>{'   '}
          <Button variant="danger" type="button"  onClick={(e) => {
              e.preventDefault();
              eliminarBuseta();
            }} >
            Eliminar Buseta
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default App;
