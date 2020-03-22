import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import className from "classnames";

const COUNTRY_QUERY = gql`
  query CountryQuery($id: String!) {
    country(id: $id) {
      id
      iso2Code
      name
      capitalCity
      longitude
      latitude
      region {
        value
      }
    }
  }
`;

const Country = props => {
  let { id } = props.match.params;
  return (
    <>
      <Query query={COUNTRY_QUERY} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log("error", error);

          const {
            id,
            iso2Code,
            name,
            capitalCity,
            longitude,
            latitude,
            region: { value }
          } = data.country;

          return (
            <div>
              <h1 className="display-4 my-3">{name}</h1>
              <h4 className="mb-3">{id}</h4>
              <ul className="list-group">
                <li className="list-group-item">Name: {name}</li>
                <li className="list-group-item">ISO 2 Code: {iso2Code}</li>
                <li className="list-group-item">Capital City: {capitalCity}</li>
                <li className="list-group-item">Long: {longitude}</li>
                <li className="list-group-item">Lat: {latitude}</li>
              </ul>
              <h4 className="my-3">Region</h4>
              <ul className="list-group">
                <li className="list-group-item">{value}</li>
              </ul>
              <hr />
              <Link to="/" className="btn btn-secondary">
                Back
              </Link>
            </div>
          );
        }}
      </Query>
    </>
  );
};

export default Country;
