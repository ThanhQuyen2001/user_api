const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Voucher = new Schema(
    {
        name: { type: String },
        percent: { type: Number },
        value: { type: Number }
    },
    {
        timestamps: true,
    },
);


module.exports = mongoose.model('Voucher', Voucher);
