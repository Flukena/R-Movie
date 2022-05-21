const express = require('express');
const {json} = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const http = require("http");
const cookieParser = require('cookie-parser');
require('dotenv').config()

let app = express();
const server = http.createServer(app);
app.use(bodyParser.json());  // ให้ app(express) ใช้งานการ parse json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(morgan('dev')); // ให้ app(express) ใช้งานการ morgam module
app.use(cors()); // ให้ app(express) ใช้งานการ cors module

const userRouter = require('./routes/user-routes');
const authRouter = require('./routes/auth-routes');
const dataRouter = require('./routes/data-routes')
const commentRouter = require('./routes/comment-routes')
app.use(cookieParser());
app.use('/users', userRouter)
app.use('/auth', authRouter)
app.use('/get', dataRouter)
app.use('/comment', commentRouter)
const port = parseInt(process.env.PORT, 10) || 3000

app.use(json());
// const query ='INSERT INTO users (user_name, user_email, user_password, user_firstname, user_lastname, user_nickname) VALUES ($1,$2,$3,$4,$5,$6)'

// client.query(query,["user_name", "user_email", "user_password", "user_firstname", "user_lastname", "user_nickname"], (err, res) => {
//   if (err) {
//       console.error(err);
//       return;
//   }
//   console.log('Databaase Connecting');
//   client.end();
// });
// client.query(query, ["user_name", "user_email", "user_password", "user_firstname", "user_lastname", "user_nickname"])
app.set("port", port)
server.listen(port, function() {
    console.log('Server Listen at http://localhost:'+port);
});