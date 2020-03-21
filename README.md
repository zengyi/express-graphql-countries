npm init

server side:

npm i graphql express-graphql express axios


in package.json

  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js"
  },


npm run server

in server.js
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true //disable this on PROD
  })
);

client side: