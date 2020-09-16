import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Include components
import ContactList from "./components/contact-list/constact-list";

class App extends React.Component {
  state = {
    List: [
      {
        id: 1,
        name: "Mike Anamendolla",
        address: "5842 Hillcrest Rd",
        phone: "(870) 288-4149",
        email: "mike.ana@example.com",
        image: "https://api.randomuser.me/portraits/med/men/1.jpg",
        gender: "m",
      },
      {
        id: 2,
        name: "Seth Frazier",
        address: "7396 E North St",
        phone: "(560) 180-4143",
        email: "seth.frazier@example.com",
        image: "https://api.randomuser.me/portraits/med/men/78.jpg",
        gender: "m",
      },
      {
        id: 3,
        name: "Rosemary Porter",
        address: "5267 Cackson St",
        phone: "(497) 160-9776",
        email: "rosemary.porter@example.com",
        image: "https://api.randomuser.me/portraits/med/women/1.jpg",
        gender: "w",
      },
      {
        id: 4,
        name: "Debbie Schmidt",
        address: "3903 W Alexander Rd",
        phone: "(867) 322-1852",
        email: "debbie.schmidt@example.com",
        image: "https://api.randomuser.me/portraits/med/women/11.jpg",
        gender: "w",
      },
    ],
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <h1>Contact list</h1>
          <div className="card card-default" id="card_contacts">
            <div
              id="contacts"
              className="panel-collapse collapse show"
              aria-expanded="true"
            >
              <ContactList ContactList={this.state.List} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
