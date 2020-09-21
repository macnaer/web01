import React from "react";

class EditContact extends React.Component {
  state = {
    name: this.props.currentContact.name,
  };

  render() {
    console.log("EditContact ", this.props.currentContact);
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Edit contact</h1>
            <div> {this.state.name}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditContact;
