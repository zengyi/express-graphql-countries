import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Country from "./components/Country";

const client = new ApolloClient({
  uri: "/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Route exact path="/" component={Countries} />
          <Route exact path="/country/:id" component={Country} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
