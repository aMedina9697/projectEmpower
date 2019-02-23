import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "../styles/profile.css";
import Modal from 'react-responsive-modal';
import API from "../utils/API";
import brows from "../assets/brows.png";
import eyes from "../assets/eyes.png";
import nose from "../assets/nose.png";
import lips from "../assets/lips.png";
import Nav from "../components/Nav";
import Navigation from "../components/Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Profile extends Component {
  state = {
    open: false,
    products: [],
    selectedProducts: []
  };

  componentDidMount() {
    this.loadProducts();
  }
  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({ products: res.data })
      )
      .catch(err => console.log(err));
  };
  onOpenModal = (type) => () => {
    // console.log(type);
    this.setState({ open: true });
    this.getProductsByType(type)
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  getProductsByType(type) {
    // console.log(`im gettin dem products! with type ${type}`)
    let selectedProducts = this.state.products.filter(p => p.product_type === type)
    this.setState({ selectedProducts: selectedProducts })
  }

  ourModal = () => {
    return (
      <Modal open={this.state.open} onClose={this.onCloseModal} center>
        {this.state.selectedProducts.map(product => (
          <div key={product._id}>
            <p> {product.product_brand} | {product.product} | {product.product_shade} </p>
          </div>
        )
        )}
      </Modal>
    )
  }
  render() {
    // const { open } = this.state;
    return (

      <div className="mainBody">
        {console.log(this.state)}
        <div id="foreheadCircle"><FontAwesomeIcon icon="star" onClick={this.onOpenModal("Skin")} />
          {this.ourModal()}
        </div>
        <br />
        <br />
        <div> <img src={brows} id="browsPic" alt="eyebrows" onClick={this.onOpenModal("Eyebrows")} />
          {this.ourModal()}
        </div>
        <br />
        <div>  <img src={eyes} id="eyesPic" alt="eyes" onClick={this.onOpenModal("Eyes")} />
          {this.ourModal()}
        </div>

        <br />
        <br />
        <img src={nose} id="nosePic" alt="nose" />

        <div id="cheekCircle"><FontAwesomeIcon icon="star" onClick={this.onOpenModal("Cheek")} />
          {this.ourModal()}
        </div>
        <br />
        <br />
        <div>
          <img src={lips} id="lipsPic" alt="lips" onClick={this.onOpenModal("Lips")} />
          {this.ourModal()}
        </div>

        <br />
        <br />

      </div>

    )

  }
};



export default Profile;
