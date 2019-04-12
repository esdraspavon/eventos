import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

class App extends Component {
  token = "B7GX7TMDY5ZWIQZTTWCX";

  state = {
    categories: []
  };

  componentDidMount() {
    this.getCategories();
  }
  getCategories = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${
      this.token
    }&locale=es_ES`;

    await fetch(url)
      .then(resp => {
        return resp.json();
      })
      .then(categories => {
        this.setState({ categories: categories.categories });
      });
  };

  getEvents = async query => {
    console.log(query);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="uk-container">
          <Form getEvents={this.getEvents} categories={this.state.categories} />
        </div>
      </div>
    );
  }
}

export default App;
