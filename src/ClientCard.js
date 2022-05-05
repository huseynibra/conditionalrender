import React from "react";

class ClientCard extends React.Component {
  render() {
    const { name, phone, card } = this.props;
    if(!name) {
        return <h1>Anonymous</h1>
    }

    // if(!card) {
    //     return <h1>Card is not defined</h1>
    // }



    return (
      <div className="card" style={{ width: "18rem", ...{backgroundColor: card ? "grey" : "yellow"}}}>
        <div className="card-body">
          <h5 className="card-title">Имя клиента: {name}</h5>
          {phone && <h6 className="card-subtitle mb-2 text-muted">Телефон: {phone}</h6>}
          <p className="card-text">Номер карты: {card}</p>
        </div>
      </div>
    );
  }
}

export default ClientCard;