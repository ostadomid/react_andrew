const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');
const app = express();




app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true}));

app.get('/', (req, res) => { 
    res.send(`
        <a style="text-decoration:none;" href="/graphql">GraphiQL</a>
    `);
});




app.listen(4000, () => { 
    console.log('Express Server is running on port 4000 ...');
});

