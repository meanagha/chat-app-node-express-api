const express = require("express")
const cors = require("cors")
const http = require("http")
const morgan = require("morgan")
const allRouter = require('./routes/user')


const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
//app.use(express.urlencoded({extended:true}));
app.use('/api/v1',allRouter)

const port = 3000;
const server = http.createServer(app)
server.listen(port);
server.on("listening",() => {
    console.log("listening1 on PORT",port)
})