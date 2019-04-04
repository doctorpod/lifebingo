// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://postgres@127.0.0.1/bingo_development"
  },
  docker: {
    client: "pg",
    connection: "postgresql://postgres@host.docker.internal/bingo_development"
  }
};
