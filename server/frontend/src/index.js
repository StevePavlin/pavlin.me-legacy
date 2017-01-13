/**
 * Used before I discovered the amazing nginx heroku buildpack
 */

require('dotenv').config();

import express from 'express';
import http from 'http';

let app = express();
app.server = http.createServer(app);

// serve our built react client
if (process.env.NODE_ENV == 'production') {
  app.use(express.static(${__dirname}`/public`));
}

app.server.listen(process.env.PORT);

console.log(`Express listening on port ${app.server.address().port}`);

export default app;