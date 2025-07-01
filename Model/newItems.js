const mongoose = require  ('mongoose');  

const schoolSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    dateFounded: {
        type: Date

    },
    claimed: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

const School = mongoose.model("mySchool", schoolSchema);
module.exports = School;