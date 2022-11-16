/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import {expressjwt} from 'express-jwt';
import path from 'path';
const PocketBase = require('pocketbase/cjs');

require('cross-fetch/polyfill');
global.EventSource = require('eventsource')

const app = express();
const client = new PocketBase('http://127.0.0.1:8090');

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jwtMW = expressjwt({
  secret: 'test',
  algorithms: ['HS256'],
});

let users = [
  {
      id: 1,
      username: 'test',
      password: 'asdf123'
  },
  {
      id: 2,
      username: 'test2',
      password: 'asdf12345'
  }
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Use your DB ORM logic here to find user and compare password
  for (let user of users) { // I am using a simple array users which i made above
      if (username == user.username && password == user.password /* Use your password hash checking logic here !*/) {
          //If all credentials are correct do this
          let token = jwt.sign({ id: user.id, username: user.username }, 'keyboard cat 4 ever', { expiresIn: 129600 }); // Sigining the token
          res.json({
              sucess: true,
              err: null,
              token
          });
          break;
      }
      else {
          res.status(401).json({
              sucess: false,
              token: null,
              err: 'Username or password is incorrect'
          });
      }
  }
});

// app.get('/', jwtMW /* Using the express jwt MW here */, (req, res) => {
//   res.send('You are authenticated'); //Sending some response when authenticated
// });

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
      res.status(401).send(err);
  }
  else {
      next(err);
  }
});

app.get('/api', async (req, res) => {
  const records = await client.records.getFullList('test', 200 /* batch size */, {
    sort: '-created',
});
  res.send(records);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
