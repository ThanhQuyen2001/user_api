const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Config = new Schema(
    {
        cauHinh: { type: String },
        ten: { type: String },
    },
    {
        timestamps: true,
    },
);


module.exports = mongoose.model('Config', Config);
