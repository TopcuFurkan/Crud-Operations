const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const EcommarceRoute = require("../src/routes/route");
const Cors=require("cors");
const corsOptions = require("./Cors");


app.use(BodyParser.json());
app.use(Cors(corsOptions))

app.use("/api",EcommarceRoute);



module.exports = app;