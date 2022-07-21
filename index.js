const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Connect to Database
const dbLink = process.env.MONGO_URI;

mongoose
    .connect(dbLink, { useNewUrlParser: true }, { useUnifiedTopology: true })
    .then(() => {
        if (process.env.NODE_ENV !== "test") {
            console.log("Server is connected to Mongo DB .... \n");
            console.log("Press CTRL + C to stop the proccess .... \n");
        }
    })
    .catch((err) => {
        console.error("Server error: ", err.message);
        process.exit(1);
    });

// Parser
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));

// PORT
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
