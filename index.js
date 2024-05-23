const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express()
const dotenv = require('dotenv').config()
const {notFound, errorHandler} = require("./middlewares/errorHandler")
const port = process.env.port || 4000;
const authRouter = require("./routes/authRoute");
const bodyParser = require('body-parser');


dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
                    }
                )
