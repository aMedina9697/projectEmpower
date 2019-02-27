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
import "../styles/products.css";

class Products extends Component {
  state = {
    products: [],
    product: "",
    product_brand: "",
    product_price: "",
    product_shade: "",
    product_type: "Skin",
    product_note: ""

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
        .then(res => this.loadProducts())
        .catch(err => console.log(err));
    }
  };

  render() {
    console.log('this is our state', this.state)
    let buttonConditional = !(this.state.product.length > 0 && this.state.product_brand.length > 0 && this.state.product_price.length > 0 && this.state.product_shade.length > 0  && this.state.product_note.length > 0)
    console.log('test codition!!!!', buttonConditional);
    return (
      <Container fluid>
        <Navigation />
        <br/>
      <br/>
        <Row>
          <Col size="md-1"></Col>
          <Col size="md-10">
            <Jumbotron>
              <h1 class="formintro">add your <br/> products, gorgeous:</h1>
            </Jumbotron>
            <form>
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
              <select onChange={this.handleInputChange} name="product_type" id="dropdown">
                <option
                  value="Skin">skin</option>
                <option
                  value="Eyes">eyes</option>
                <option
                  value="Cheek">cheeks</option>
                <option
                  value="Eyebrows">eyebrows</option>
                <option
                  value="Lips">lips</option>
              </select>

              <TextArea
                value={this.state.product_note}
                onChange={this.handleInputChange}
                name="product_note"
                placeholder="thoughts?"
              />
              <FormBtn
                // disabled={!(this.state.product && this.state.product_brand && this.state.product_price && this.state.product_shade && this.state.product_type && this.state.product_note)}
                disabled={buttonConditional}
                onClick={this.handleFormSubmit}
              > 
                add

              </FormBtn>
              {/* <button onClick={this.handleFormSubmit}> SUBMITTTTTTTTTTTTTTTT</button> */}
              <br />
              <br />
              <br />
              <br />
              <br />
            </form>
          </Col>
          <Col size="md-1"></Col>
        </Row>
        <Nav />
      </Container>
    );
  }
}

export default Products;