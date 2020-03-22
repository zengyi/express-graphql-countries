const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require("graphql");

// Country Type
const CountryType = new GraphQLObjectType({
  name: "Country",
  fields: () => ({
    id: { type: GraphQLString },
    iso2Code: { type: GraphQLString },
    name: { type: GraphQLString },
    capitalCity: { type: GraphQLString },
    longitude: { type: GraphQLFloat },
    latitude: { type: GraphQLFloat },
    region: { type: RegionType },
    incomeLevel: { type: IncomeLevelType }
  })
});

// Region Type
const RegionType = new GraphQLObjectType({
  name: "Region",
  fields: () => ({
    id: { type: GraphQLString },
    value: { type: GraphQLString }
  })
});

// Region Type
const IncomeLevelType = new GraphQLObjectType({
  name: "IncomeLevel",
  fields: () => ({
    id: { type: GraphQLString },
    value: { type: GraphQLString }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    countries: {
      type: new GraphQLList(CountryType),
      resolve(parent, args) {
        return axios
          .get(
            "http://api.worldbank.org/countries?format=json&page=1&per_page=350"
          )
          .then(res => res.data[1]);
      }
    },
    country: {
      type: CountryType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.worldbank.org/v2/country/${args.id}?format=json`)
          .then(res => res.data[1][0]);
      }
    },
    regions: {
      type: new GraphQLList(RegionType),
      resolve(parent, args) {
        return axios
          .get("https://api.worldbank.org/v2/region?format=json")
          .then(res => res.data);
      }
    },
    region: {
      type: RegionType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.worldbank.org/v2/region/${args.id}`)
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
