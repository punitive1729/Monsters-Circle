import { Component } from "react";

const Card = ({ monster }) => {
  const { name, id, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster-${name}`}
        src={`https://robohash.org/${id}?set=set2&size=200x200`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

/*
class Card extends Component {
  render() {
    const { name, id, email } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster-${name}`}
          src={`https://robohash.org/${id}?set=set2&size=200x200`}
        />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}
*/

export default Card;
