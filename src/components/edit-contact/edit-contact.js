import React from "react";

class EditContact extends React.Component {
  render() {
    console.log("EditContact ", this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Edit contact</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default EditContact;
