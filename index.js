const express=require("express")
const app=express();
const bodyParser = require("body-parser");
const appRoute=require("./api/calculate");
app.use(bodyParser.json());
app.use("/home", appRoute);
app.listen(8090,()=>{

    console.log("Application started and listening to port 8090");
})