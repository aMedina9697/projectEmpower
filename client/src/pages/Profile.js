import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "../styles/profile.css";
import Modal from 'react-responsive-modal';

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
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (

      <div className="mainBody">

        <div id="foreheadCircle"><FontAwesomeIcon icon="star" onClick={this.onOpenModal} />
          <Modal open={open} onClose={this.onCloseModal} center>
            <h1>did this work? </h1>
          </Modal>
        </div>
        <br />
        <br />
        <div> <img src={brows} id="browsPic" alt="eyebrows" onClick={this.onOpenModal} />
          <Modal open={open} onClose={this.onCloseModal} center>
            <h1>did this work? </h1>
          </Modal>
        </div>
        <br />
        <div>  <img src={eyes} id="eyesPic" alt="eyes" onClick={this.onOpenModal} />
          <Modal open={open} onClose={this.onCloseModal} center>
            <h1>did this work? </h1>
          </Modal>
        </div>

        <br />
        <br />
        <div>  <img src={nose} id="nosePic" alt="nose" onClick={this.onOpenModal} />
          <Modal open={open} onClose={this.onCloseModal} center>
            <h1>did this work? </h1>
          </Modal>
        </div>

        <div id="cheekCircle"><FontAwesomeIcon icon="star" onClick={this.onOpenModal} />
          <Modal open={open} onClose={this.onCloseModal} center>
            <h1>did this work? </h1>
          </Modal>
        </div>
        <br />
        <br />
        <div>
          <img src={lips} id="lipsPic" alt="lips" onClick={this.onOpenModal} />
          <Modal open={open} onClose={this.onCloseModal} center>
            <h1>did this work? </h1>
          </Modal>
        </div>

        <br />
        <br />

      </div>

    )

  }
};
export default Profile;
