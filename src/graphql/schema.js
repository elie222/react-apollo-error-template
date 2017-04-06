import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const FixtureHistoryType = new GraphQLObjectType({
  name: 'FixtureHistory',
  fields: {
    lineup: { type: new GraphQLList(GraphQLString) },
  },
});

const TeamType = new GraphQLObjectType({
  name: 'Team',
  fields: {
    _id: { type: GraphQLID },
    history: { type: new GraphQLList(FixtureHistoryType) },
  },
});

const teamData = {
  _id: 1,
  history: [
    null,
    {lineup: ['a', 'b', 'c']},
    {lineup: ['a', 'b', 'c']},
  ]
}

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    team: {
      type: TeamType,
      resolve: () => teamData,
    },
  },
});

export const schema = new GraphQLSchema({ query: QueryType });
