npm init

server side:

npm i graphql express-graphql express axios cors

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

npx create-react-app client

npm install concurrently
yarn add concurrently

cd into client
npm install apollo-boost @apollo/react-hooks graphql react-apollo classnames moment react-moment react-router-dom
yarn add apollo-boost @apollo/react-hooks graphql react-apollo classnames moment react-moment react-router-dom
