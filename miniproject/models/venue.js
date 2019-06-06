// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const VenueSchema = new Schema({
module.exports = function(app) {
    const venue = ({
        "events" : [
            {
            "band" : "Smashing Pumpkins",
            "date" : "September 20"
            },
            {
            "band" : "Pavement",
            "date" : "September 22"
            }
        ],
        "seats" : 200
    });
};