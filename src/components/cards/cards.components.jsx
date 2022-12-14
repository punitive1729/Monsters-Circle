import { Component } from "react";
import Card from "./card.component";
import "./cards.styles.css";

const Cards = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster} />
      ))}
    </div>
  );
};

/*
class Cards extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card monster={monster} />
        ))}
      </div>
    );
  }
}
*/

export default Cards;