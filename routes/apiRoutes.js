//going to contain my GET for dinosaur facts
// require my db 
const db = require("../models");
//require sequelize here 
const sequelize = require("sequelize");

module.exports = function(app){
    //get one at time per day click
    app.get("/api/dinosaurFact/:id", function(req,res){
        const dayNum = req.params.id;
        console.log(dayNum)
        console.log("here")
        //find by pk as pk will rep the day number
        // db.findByPk(dayNum)
    })
}