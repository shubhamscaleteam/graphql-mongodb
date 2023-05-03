export default `#graphql

type User {
    userName : String!
    gender : String!
    age: Int!
    email  : String!
    password : String!
}

type Query {
    users : [User]
    user (_id : ID!) : User!
}

input createUserInput {
    userName : String!
    gender : String!
    age: Int!
    email  : String!
    password : String!
}

type Message {
    message : String!
}

input updateUserInput {
    userName : String!
    gender : String!
    age: Int!
    email  : String!
}

type Mutation {
        createUser(input: createUserInput!):User!
        deleteUser(_id:ID!): Message!
        updateUser(_id:ID!, input: updateUserInput!): Message!
}
   
`;
