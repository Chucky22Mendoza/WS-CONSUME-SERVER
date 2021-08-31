const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

//VARIABLES DE ENTORNO
require("dotenv").config();

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// welcome
app.get("/", (req, res) => {
    res.status(200).json({ auth: "Bienvenido a bases de datos externas" });
});

//routes
app.use("/consulta/externa", require("./routes/consume.routes"));

// settings
app.set("port", process.env.PORT || 4000);

module.exports = app;