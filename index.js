require("dotenv").config();
const server = require("./api/server.js");

PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Budget-tool server, listening on PORT ${PORT}`);
});
