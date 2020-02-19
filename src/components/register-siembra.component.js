import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class RegisterSiembra extends Component {
  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeNombreName = this.onChangeNombreName.bind(this);
    this.onChangeDocenteDetails = this.onChangeDocenteDetails.bind(this);
    this.onChangeHorasS = this.onChangeHorasS.bind(this);
    this.onChangeAreaInfo = this.onChangeAreaInfo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      nombre: '',
      docente: '',
      horas: '',
      area: ''
    }
  }

  onChangeNombreName(e) {
    this.setState({nombre: e.target.value})
  }

  onChangeDocenteDetails(e) {
    this.setState({docente: e.target.value})
  }

  onChangeHorasS(e) {
    this.setState({horas: e.target.value})
  }

  onChangeAreaInfo(e) {
    this.setState({area: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const siembraObject = {
      nombre: this.state.nombre,
      docente: this.state.docente,
      horas: this.state.horas,
      area: this.state.area,
    };
    axios.post('https://microservicio-registrocurso.herokuapp.com/register-siembra', siembraObject)
      .then(res => console.log(res.data));

    this.setState({ nombre: '', docente: '', horas: '',area:'' })
  }
  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="formGroupNombre">
          <Form.Label>Nombre del curso</Form.Label>
          <Form.Control type="text" value={this.state.nombre} onChange={this.onChangeNombreName}/>
        </Form.Group>

        <Form.Group controlId="formGroupDocente">
          <Form.Label>Docente</Form.Label>
          <Form.Control type="text" value={this.state.docente} onChange={this.onChangeDocenteDetails}/>
        </Form.Group>



        <Form.Group controlId="formGroupHoras">
          <Form.Label>Horas</Form.Label>
          <Form.Control type="text" value={this.state.horas} onChange={this.onChangeHorasS}/>
        </Form.Group>


        <Form.Group controlId="formGroupNombreArea">
          <Form.Label>Área</Form.Label>
          <Form.Control type="text" value={this.state.area} onChange={this.onChangeAreaInfo}/>
        </Form.Group>

        <Button variant="success" size="lg" block="block" type="submit">
          Registrar Curso
        </Button>
      </Form>
    </div>);
  }
}
