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
import Header from "./components/header/header";

class App extends React.Component {
  URL = "https://react-contact-list-a6f1f.firebaseio.com/List.json";
  state = {
    List: [],
    currentContact: "",
    findContact: "",
  };

  componentDidMount() {
    this.UpdateContactList();
  }

  UpdateContactList = () => {
    fetch(this.URL)
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        if (data == null) {
          this.setState({
            List: [],
          });
        } else {
          this.setState({
            List: data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  async SaveData(newList) {
    await fetch(this.URL, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newList),
    })
      .then((responce) => {
        console.log("Responce => ", responce);
      })
      .catch((err) => console.log(err));
  }

  onSearch = (contactName) => {
    this.setState({
      findContact: contactName,
    });
  };

  onShowContactList = (List, findContact) => {
    if (findContact.length === 0) {
      return List;
    }
    return List.filter((item) => {
      return item.name.toLowerCase().indexOf(findContact.toLowerCase()) > -1;
    });
  };

  isFavorite = (id) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);
    const tmp = this.state.List.slice();
    tmp[index].favorite = !tmp[index].favorite;
    this.setState({
      favorite: this.tmp,
    });
    this.SaveData(this.state.List);
  };
  onDeleteContact = (id) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);

    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, ...partTwo];
    this.SaveData(newList);
    this.setState((state) => {
      return {
        List: newList,
      };
    });
  };

  editContact = (id) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);
    const currentContact = this.state.List[index];
    this.setState({
      currentContact: currentContact,
    });
  };

  onEditCurrentContact = (
    id,
    name,
    address,
    telnumber,
    email,
    image,
    gender
  ) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);
    let editedContact = {
      id: id,
      name: name,
      address: address,
      image: image,
      phone: telnumber,
      gender: gender,
      email: email,
      star: false,
    };
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, editedContact, ...partTwo];
    this.SaveData(newList);
    this.setState({
      List: newList,
    });
  };

  render() {
    const showContacts = this.onShowContactList(
      this.state.List,
      this.state.findContact
    );
    return (
      <Router>
        <Header onSearch={this.onSearch} />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <ContactList
                ContactList={showContacts}
                isFavorite={this.isFavorite}
                editContact={this.editContact}
                onDeleteContact={this.onDeleteContact}
              />
            )}
          />
          <Route
            path="/edit"
            exact
            render={() => (
              <EditContact
                currentContact={this.state.currentContact}
                onEditCurrentContact={this.onEditCurrentContact}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
