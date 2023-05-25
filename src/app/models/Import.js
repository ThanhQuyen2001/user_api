const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Import = new Schema(
    {
        ten: { type: String },
        soLuong: {type: Number},
        dinhKem: {type: Array},
        nguoiNhap: {type: String},
        ngayTao: {type: String},
    },
    {
        timestamps: true,
    },
);


module.exports = mongoose.model('Import', Import);
