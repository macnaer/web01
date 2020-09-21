import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import uuid from "react-uuid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Include components
import ContactList from "./components/contact-list/constact-list";
import EditContact from "./components/edit-contact/edit-contact";
import NotFound from "./components/notFound/notFound";

class App extends React.Component {
  state = {
    List: [
      {
        id: uuid(),
        name: "Mike Anamendolla",
        address: "5842 Hillcrest Rd",
        phone: "(870) 288-4149",
        email: "mike.ana@example.com",
        image: 57,
        gender: "men",
        favorite: false,
      },
      {
        id: uuid(),
        name: "Seth Frazier",
        address: "7396 E North St",
        phone: "(560) 180-4143",
        email: "seth.frazier@example.com",
        image: 53,
        gender: "men",
        favorite: false,
      },
      {
        id: uuid(),
        name: "Rosemary Porter",
        address: "5267 Cackson St",
        phone: "(497) 160-9776",
        email: "rosemary.porter@example.com",
        image: 53,
        gender: "women",
        favorite: false,
      },
      {
        id: uuid(),
        name: "Debbie Schmidt",
        address: "3903 W Alexander Rd",
        phone: "(867) 322-1852",
        email: "debbie.schmidt@example.com",
        image: 11,
        gender: "women",
        favorite: true,
      },
    ],
    currentContact: "",
  };

  isFavorite = (id) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);
    const tmp = this.state.List.slice();
    tmp[index].favorite = !tmp[index].favorite;
    this.setState({
      favorite: this.tmp,
    });
  };

  editContact = (id) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);
    const currentContact = this.state.List[index];
    console.log("Current Contact = > ", currentContact);
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <ContactList
                ContactList={this.state.List}
                isFavorite={this.isFavorite}
                editContact={this.editContact}
              />
            )}
          />
          <Route
            path="/edit"
            exact
            render={() => (
              <EditContact currentContact={this.state.currentContact} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
