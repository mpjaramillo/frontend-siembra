import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import SiembraTableRow from './SiembraTableRow';

export default class SiembraList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      siembras: []
    };
  }

  componentDidMount() {
    axios.get('https://microservice-siembra.herokuapp.com/siembras/')
      .then(res => {
        this.setState({
          siembras: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.siembras.map((res, i) => {
      return <SiembraTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Docente</th>
            <th>Horas</th>
	          <th>Area</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}
