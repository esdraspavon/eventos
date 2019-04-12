import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

class App extends Component {
  token = "B7GX7TMDY5ZWIQZTTWCX";
  ordening = "date";

  state = {
    categories: [],
    events: []
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
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${
      query.name
    }&categories=${query.category}&token=${this.token}&locale=es_ES`;

    await fetch(url)
      .then(resp => {
        return resp.json();
      })
      .then(events => {
        this.setState({ events: events.events });
      });
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
