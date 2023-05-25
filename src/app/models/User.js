const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema(
    {
        ten: { type: String },
        phone: { type: String },
        diaChi: {type: String},
        anh: {type: String},
        chucVu: {type: Number},
        password: {type: String},
    },
    {
        timestamps: true,
    },
);


module.exports = mongoose.model('User', User);
