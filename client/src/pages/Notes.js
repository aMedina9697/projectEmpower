import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Nav from "../components/Nav";
import Navigation from "../components/Navigation";
import "../styles/notes.css";


class Notes extends Component {
  state = {
  products: [],
  product:"",
  product_brand: "",
  product_price: "",
  product_shade: "",
  product_type: "",
  product_note: ""
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({ products: res.data, product:"", product_brand: "", product_price: "", product_shade: "", product_type: "", product_note: "" })
      )
      .catch(err => console.log(err));
  };

  deleteProduct = id => {
    API.deleteProduct(id)
      .then(res => this.loadProducts())
      .catch(err => console.log(err));
  };

  render() {
    return (
      
      <Container fluid>
      <Navigation/>
      
      <br/>
      <br/>
        <Row>
        <Col size="md-1"></Col>
          <Col size="md-10">
            <Jumbotron>
              <h1 class="label"> love notes...</h1>
            </Jumbotron>
            {this.state.products.length ? (
              <List>
                {this.state.products.map(product => (
                  <ListItem key={product._id} >
                  <div id="note">
                    <Link to={"/products/" + product._id}>
                      <strong id="renderedname">
                        {product.product} : 
                        </strong><DeleteBtn onClick={() => this.deleteProduct(product._id)} />
                        <br/>
                        <span id="renderednote">
                         {product.product_note}</span>
                    </Link> 
                  </div>
                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3> nothing saved yet ;) </h3>
            )}
          </Col>
          <Col size="md-1"></Col>
        </Row>
        <Nav/>
      </Container>
    );
  }
}

export default Notes;