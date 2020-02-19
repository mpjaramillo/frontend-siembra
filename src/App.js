import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RegisterSiembra from "./components/register-siembra.component";
import SiembraList from "./components/siembra-list.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="primary" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/register-siembra"} className="nav-link" variant="dark">
                Cursos
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/register-siembra"} className="nav-link">
                  Registro de Curso
                </Link>
              </Nav>

              <Nav>
                <Link to={"/siembra-list"} className="nav-link">
                  Listado de curso
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={RegisterSiembra} />
                <Route path="/register-siembra" component={RegisterSiembra} />
                <Route path="/siembra-list" component={SiembraList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;
