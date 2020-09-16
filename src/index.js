import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./index.css";

// Include components
import ContactList from "./components/contact-list/constact-list";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div class="container">
          <div class="card card-default" id="card_contacts">
            <div
              id="contacts"
              class="panel-collapse collapse show"
              aria-expanded="true"
              style=""
            >
              <ul class="list-group pull-down" id="contact-list">
                <ContactList />
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
