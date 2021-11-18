const { Tech, List } = require('../models');

const resolvers = {
  Query: {
    tech: async () => {
      return Tech.find({});
    },
    buckets: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return List.find(params);
    },
  },
  Mutation: {
    createList: async (parent, args) => {
      const bucket = await List.create(args);
      return bucket;
    },
  },
};

module.exports = resolvers;
