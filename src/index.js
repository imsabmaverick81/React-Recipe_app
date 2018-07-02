import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "./first-component.css";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import Navbar from "./Navbar";

class Activity extends React.Component {
  render() {
    const style = { fontSize: "1.5em", backgroundColor: "red" };
    const activities = ["eating", "sleeping", "cuddling"];
    return (
      <ul>
        {activities.map(a => {
          return <li style={style}>{a}</li>;
        })}
      </ul>
    );
  }
}

class App extends React.Component {
  static defaultProps = {
    recipes: [
      {
        title: "Spaghetti",
        ingredients: ["flour", "water"],
        instructions: "Mix ingredients",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Lutong_Bahay_-_Bolognese_Spaghetti.jpg/800px-Lutong_Bahay_-_Bolognese_Spaghetti.jpg"
      }
    ]
  };
  render() {
    const randomImg = [
      "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&h=350",
      "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&h=350",
      "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&h=350",
      "https://images.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg?auto=compress&cs=tinysrgb&h=350"
    ][Math.floor(Math.random() * 4)];

    return (
      <div class="App">
        <Navbar />
        <RecipeList />
      </div>
      // <div
      //   className="card"
      //   style={{
      //     backgroundImage: `url(${randomImg})`,
      //     fontSize: "12px"
      //   }}
      // >
      //   <Recipe />
      //   <h2 className="name">Nature Basket</h2>
      //   <Activity />
      // </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
