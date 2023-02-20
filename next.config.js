const { version, name } = require("./package.json");

module.exports = {
  env: {
    NEXT_PUBLIC_VERSION: version,
    NEXT_PUBLIC_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_NAME: name,
  },
  compress: false,
};
