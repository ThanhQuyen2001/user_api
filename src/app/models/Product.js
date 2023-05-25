const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Product = new Schema(
    {
        ten: { type: String },
        phanLoai: { type: String },
        gia: {type: Number},
        soLuong: {type: Number},
        dinhKem: {type: Array},
        trangThai: {type: Number}
    },
    {
        timestamps: true,
    },
);


module.exports = mongoose.model('Product', Product);
