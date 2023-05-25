const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Order = new Schema(
    {
        sanPham: {type: Array},
        nguoiMua: {type: String},
        phone: {type: String},
        diaChi: {type: String},
        ngayMua: {type: String},
        trangThai: {type: Number},
        ngayTao: {type: String},
    },
    {
        timestamps: true,
    },
);


module.exports = mongoose.model('Order', Order);
