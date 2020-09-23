import React from "react";
import { Redirect } from "react-router-dom";

class EditContact extends React.Component {
  state = {
    id: this.props.currentContact.id,
    name: this.props.currentContact.name,
    address: this.props.currentContact.address,
    gender: this.props.currentContact.gender,
    phone: this.props.currentContact.phone,
    email: this.props.currentContact.email,
    image: this.props.currentContact.image,
    isRedirect: false,
  };

  getAvatar = (event) => {
    this.setState({
      image: event.target.value,
    });
  };

  getName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  getTelNumber = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };
  getAddress = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  getEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  onSendData = (event) => {
    event.preventDefault();
    const { id, name, address, phone, email, image, gender } = this.state;
    this.props.onEditCurrentContact(
      id,
      name,
      address,
      phone,
      email,
      image,
      gender
    );
    this.setState({
      isRedirect: true,
    });
  };
  render() {
    console.log("currentContact =>", this.props.currentContact);
    const { name, address, phone, email, image, gender } = this.state;
    console.log("Avatar => ", image);
    const URL = `https://api.randomuser.me/portraits/${gender}/${image}.jpg`;
    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <form onSubmit={this.onSendData}>
              <input
                type="text"
                value={name}
                className="form-control"
                onChange={this.getName}
                required
              />
              <input
                type="text"
                value={address}
                className="form-control"
                onChange={this.getAddress}
                required
              />
              <input
                type="number"
                min="1"
                max="99"
                value={image}
                className="form-control"
                onChange={this.getAvatar}
                required
              />
              <input
                type="text"
                value={email}
                className="form-control"
                onChange={this.getEmail}
                required
              />
              <input
                type="text"
                value={phone}
                className="form-control"
                onChange={this.getTelNumber}
                required
              />
              <button className="btn btn-success" type="submit">
                Save chages
              </button>
            </form>
          </div>
          <div className="col-md-2">
            {image.length !== 0 ? (
              <img
                className="rounded-circle mx-auto d-block img-fluid edit_photo"
                src={URL}
              />
            ) : (
              <h3>No foto</h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default EditContact;
