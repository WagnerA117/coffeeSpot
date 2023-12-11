import http from "http";

import config from "./config";
import app from "./app";

const server = http.createServer(app);

const PORT = process.env.PORT || config.port;

server.listen(PORT, () => {
	console.log("Server is running on port", PORT);
});
