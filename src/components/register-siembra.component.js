import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class RegisterSiembra extends Component {
  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeAgricultorName = this.onChangeAgricultorName.bind(this);
    this.onChangeParcelaDetails = this.onChangeParcelaDetails.bind(this);
    this.onChangeDateS = this.onChangeDateS.bind(this);
    this.onChangeSpecieInfo = this.onChangeSpecieInfo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      agricultor: '',
      parcela: '',
      fecha: '',
      especie: ''
    }
  }

  onChangeAgricultorName(e) {
    this.setState({agricultor: e.target.value})
  }

  onChangeParcelaDetails(e) {
    this.setState({parcela: e.target.value})
  }

  onChangeDateS(e) {
    this.setState({fecha: e.target.value})
  }

  onChangeSpecieInfo(e) {
    this.setState({especie: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const siembraObject = {
      agricultor: this.state.agricultor,
      parcela: this.state.parcela,
      fecha: this.state.fecha,
      especie: this.state.especie,
    };
    axios.post('http://localhost:4000/siembras/register-siembra', siembraObject)
      .then(res => console.log(res.data));

    this.setState({ agricultor: '', parcela: '', fecha: '',fecha:'',especie:'' })
  }
  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Agricultor</Form.Label>
          <Form.Control type="text" value={this.state.agricultor} onChange={this.onChangeAgricultorName}/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Parcela</Form.Label>
          <Form.Control type="text" value={this.state.parcela} onChange={this.onChangeParcelaDetails}/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Fecha</Form.Label>
          <Form.Control type="text" value={this.state.fecha} onChange={this.onChangeDateS}/>
        </Form.Group>


        <Form.Group controlId="Name">
          <Form.Label>Especie</Form.Label>
          <Form.Control type="text" value={this.state.especie} onChange={this.onChangeSpecieInfo}/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Registrar Siembra
        </Button>
      </Form>
    </div>);
  }
}