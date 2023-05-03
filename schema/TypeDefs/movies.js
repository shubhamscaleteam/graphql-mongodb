export default `#graphql

type Movies {
    title:String!
    year:Int!
    director:String!
    duration:String!
    genre:[String!]
    score:Float!
}

type Query {
    movies:[Movies]!
    movie(title:String!): Movies!
}
`;
