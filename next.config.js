const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "gigagogashvili",
        mongodb_password: "giga123",
        mongodb_clustername: "events",
        mongodb_database: "my-site-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "gigagogashvili",
      mongodb_password: "giga123",
      mongodb_clustername: "events",
      mongodb_database: "my-site",
    },
  };
};
