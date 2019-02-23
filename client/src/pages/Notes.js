import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Nav from "../components/Nav";
import Navigation from "../components/Navigation";
//import { Input, TextArea, FormBtn } from "../components/Form";


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

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.product && this.state.product_brand && this.state.product_price && this.state.product_shade && this.state.product_type && this.state.product_note) {
  //     API.saveProduct({
  //       product: this.state.product,
  //       product_brand: this.state.product_brand,
  //       product_price: this.state.product_price,
  //       product_shade: this.state.product_shade,
  //       product_type: this.state.product_type,
  //       product_note: this.state.product_note
  //     })
  //       .then(res => this.loadProducts())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      
      <Container fluid>
      <Navigation/>
        <Row>
        <Col size="md-1"></Col>
          <Col size="md-10">
            <Jumbotron>
              <h1> love notes...</h1>
            </Jumbotron>
            {this.state.products.length ? (
              <List>
                {this.state.products.map(product => (
                  <ListItem key={product._id}>
                    <Link to={"/products/" + product._id}>
                      <strong>
                        {product.product} :
                      
                         {product.product_note}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteProduct(product._id)} />
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