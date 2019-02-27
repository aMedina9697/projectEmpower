import React, { Component } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Nav from "../components/Nav";
import Navigation from "../components/Navigation";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

import Popup from "reactjs-popup";
import "../styles/products.css";


class Products extends Component {
  state = {
    products: [],
    product: "",
    product_brand: "",
    product_price: "",
    product_shade: "",
    product_type: "Skin",
    product_note: "",
    open: false
  };

 
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({ products: res.data, product: "", product_brand: "", product_price: "", product_shade: "", product_type: "Skin", product_note: "" })
      )
      .catch(err => console.log(err));
  };

  deleteProduct = id => {
    API.deleteProduct(id)
      .then(res => this.loadProducts())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({open: true})
    console.log('we got clicked!!')
    if (this.state.product && this.state.product_brand && this.state.product_price && this.state.product_shade && this.state.product_type && this.state.product_note) {
      console.log('about to do API call inside if!!!!')
      API.saveProduct({
        product: this.state.product,
        product_brand: this.state.product_brand,
        product_price: this.state.product_price,
        product_shade: this.state.product_shade,
        product_type: this.state.product_type,
        product_note: this.state.product_note
      })

        .then(res => console.log(res))
        //this.loadProducts())

        .catch(err => console.log(err));

    }
  };

  popUpClosed = () => {
    this.setState({open: false})
  }
  popUpOpen = () => {
    this.setState({open: true})
  }

  render() {
    let buttonConditional = !(this.state.product.length > 0 && this.state.product_brand.length > 0 && this.state.product_price.length > 0 && this.state.product_shade.length > 0 && this.state.product_note.length > 0)
    return (
      <Container fluid>
        <Navigation />
        <Row>
          <Col size="md-1"></Col>
          <Col size="md-10">
            <Jumbotron>
              <h1 class="formintro">add your <br/> products, gorgeous:</h1>
            </Jumbotron>
            <div>
              <Input
                value={this.state.product}
                onChange={this.handleInputChange}
                name="product"
                placeholder="product name"
              />
              <Input
                value={this.state.product_brand}
                onChange={this.handleInputChange}
                name="product_brand"
                placeholder="product brand"
              />
              <Input
                value={this.state.product_price}
                onChange={this.handleInputChange}
                name="product_price"
                placeholder="price (or estimate)"
              />
              <Input
                value={this.state.product_shade}
                onChange={this.handleInputChange}
                name="product_shade"
                placeholder="product shade"

              />
              <select onChange={this.handleInputChange} name="product_type">
                <option
                  value="Skin">Skin</option>
                <option
                  value="Eyes">Eyes</option>
                <option
                  value="Cheek">Cheek</option>
                <option
                  value="Eyebrows">Eyebrows</option>
                <option
                  value="Lips">Lips</option>
              </select>

              <TextArea
                value={this.state.product_note}
                onChange={this.handleInputChange}
                name="product_note"
                placeholder="thoughts?"
              />
              <Popup open={this.state.open} position="right center">
              <div>Your product has been added!</div></Popup>
              <FormBtn
                disabled={buttonConditional}
                onClick={(e) => { this.handleFormSubmit(e) }}
              >
                submit product!
              </FormBtn >


              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </Col>
          <Col size="md-1"></Col>
        </Row>
        <Nav />
      </Container>
    );
  }
}

export default Products;