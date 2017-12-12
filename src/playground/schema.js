const GraphQL = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList } = GraphQL;

const axios = require('axios');

const jsonServer = 'http://localhost:3000/';

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => (
        {
            id: { type:GraphQLString},
            firstName:{ type: GraphQLString} ,
            aeg: { type: GraphQLInt },
            company: {
                type: CompanyType,
                resolve(parentValue, args) {
                    return axios.get(`${jsonServer}companies/${parentValue.companyId}`).then((result) => result.data);
                }
            }
        }
    )
});

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/companies/${parentValue.id}/users`)
                    .then((result => result.data));
            }
        }
    }
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get('http://localhost:3000/users/' + args.id)
                    .then((result) => result.data);
            }
        },
        company: {
            type: CompanyType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get('http://localhost:3000/companies/' + args.id)
                    .then((result) => result.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});



