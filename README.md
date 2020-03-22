# A list of countries and regions income information from World Bank

> A simple application using express graphql and reactjs


## Quick Start

### server side:

``` bash
npm init

npm i graphql express-graphql express axios cors
```

package.json

``` javascript
"scripts": {
"start": "node server.js",
"server": "nodemon server.js"
},
```

start:

``` bash
npm run server
```

server.js

``` javascript
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true //disable this on PROD
    })
);
```

### client side:

``` bash
npx create-react-app client

npm install concurrently
yarn add concurrently

cd  client

npm install apollo-boost @apollo/react-hooks graphql react-apollo classnames moment react-moment react-router-dom
yarn add apollo-boost @apollo/react-hooks graphql react-apollo classnames moment react-moment react-router-dom
```

### run server and client together

``` bash
npm run dev
```