import React, { Component } from "react";
import "./App.css";

// Components
import Header from "./components/Header/Header";
import CardUser from "./components/CardUser/CardUser";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// Class => tener state y ciclos de vida
// Funcionales => Solo retornaban JSX (dummy, staless, funcionales)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          title="Soy el titulo a partir de una prop"
          subtitle="Soy un subtitle a partir de una prop"
        />
        <NavBar />
        <div>
          <ItemListContainer greeting="Buen fin de semana a todos!" />
        </div>
        <div className="UserSection">
          <CardUser
            name="Daniel Di Salvo"
            date="Se unio en Enero 2021"
            description="Front-end Developer y profesor del Curso de React.js en CoderHouse"
            img="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          />
          <CardUser
            name="Raul Gutierrez"
            date="Se unió en Abril 2021"
            description="Scrum Master y UX Designer en Mercado Libre"
            img="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
          />
          <CardUser
            name="Francesca Bertotti"
            date="Se unió en Julio 2021"
            description="DevOps y profesora del curso de React.js en CoderHouse"
            img="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
          />
        </div>
      </div>
    );
  }
}

export default App;
