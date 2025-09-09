const { buildSchema } = require('graphql');
const jwt = require('jsonwebtoken');

const schema = buildSchema(`
  type Query {
    profile(token: String!): String
  }
`);

const root = {
  profile: ({ token }) => {
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      return `Usuário autenticado: ${user.username}`;
    } catch {
      throw new Error('Token inválido');
    }
  }
};

module.exports = { schema, root };
