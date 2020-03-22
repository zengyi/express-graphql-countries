import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import CountryItem from "./CountryItem";

const COUNTRIES_QUERY = gql`
  query CountriesQuery {
    countries {
      id
      iso2Code
      name
      capitalCity
      incomeLevel {
        id
        value
      }
      region {
        value
      }
    }
  }
`;

const Countries = () => {
  return (
    <>
      <h1 className="display-4 my-4">Countries</h1>

      <Query query={COUNTRIES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log("error", error);

          //const regexp = /[1-9]/g;

          let countries = data.countries.filter(
            //country => !country.iso2Code.match(regexp)
            country => country.incomeLevel.id !== "NA"
          );

          let aggregate = data.countries.filter(
            country => country.incomeLevel.id === "NA"
          );

          return (
            <>
              <div className="row">
                {countries.map(country => (
                  <CountryItem key={country.id} country={country}></CountryItem>
                ))}
              </div>
              <div className="row">
                {aggregate.map(country => (
                  <CountryItem
                    key={country.id}
                    country={country}
                    type={"aggregate"}
                  ></CountryItem>
                ))}
              </div>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Countries;
