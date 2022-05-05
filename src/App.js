import React from "react";
import "./App.css";
import  ClientCard  from "./ClientCard";
import  fetchClients  from "./fetchClients";

class App extends React.Component {
  state = {
    client: null,
    
  };

  componentDidMount() {
    fetchClients().then((client) => {
      this.setState({
        client
      });
    });
  };
  render() {
    const data =  this.state.client;
    return <>
    {data ? <ClientCard name={data.name} phone={data.phone} card={data.card}/> : null}
    </>
  }
}

export default App;
