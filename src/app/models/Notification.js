const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Notification = new Schema(
    {
        noiDung: { type: String },
        thoiGian: { type: String },
        trangThai: { type: Boolean },
        id_order: { type: String }
    },
    {
        timestamps: true,
    },
);


module.exports = mongoose.model('Notification', Notification);
