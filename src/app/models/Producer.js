const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Producer = new Schema(
    {
        nguoiDaiDien: { type: String },
        phone: {type: String},
        ten: {type: String},
        email: {type: String},
        website: {type: String},
        diaChi: {type: String},
    },
    {
        timestamps: true,
    },
);


module.exports = mongoose.model('Producer', Producer);
