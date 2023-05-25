const Order = require('../models/Order');
const Notification = require('../models/Notification')

class OrderController {
    findOne(req, res, next) {
        Order.findOne({ _id: req.query.id })
            .then((order) =>
                res.json({
                    code: 0,
                    data: order,
                    message: 'Thành công',
                })
            )
            .catch(() => {
                res.json({
                    code: 0,
                    data: null,
                    message: 'Thành công',
                })
            });
    }

    findAll(req, res, next) {
        let payload = {}
        if (req.query.ngayTao) {
            payload.ngayTao = req.query.ngayTao
        }
        if (req.query.trangThai) {
            payload.trangThai = req.query.trangThai
        }
        Order.find({ ...payload })
            .then((orders) =>
                res.json({
                    code: 0,
                    data: orders,
                    message: 'Thành công',
                })
            )
            .catch(() => {
                res.json({
                    code: 0,
                    data: [],
                    message: 'Thành công',
                })
            });
    }

    async create(req, res, next) {
        const order = await Order.create({ ...req.body, trangThai: 1 })
        console.log(order, "check");
        await Notification.create({
            noiDung: req.body.nguoiMua + ' đã đặt mua 1 đơn hàng',
            thoiGian: req.body.ngayMua,
            trangThai: false,
            id_order: order._id
        })
        res.json({
            code: 0,
            message: 'Thành công',
        })
    }

    update(req, res, next) {
        Order.updateOne({ _id: req.body._id }, req.body)
            .then(() => {
                res.json({
                    code: 0,
                    message: 'Thành công',
                })
            })
            .catch(() => {
                res.json({
                    code: 1,
                    message: 'Thất bại',
                })
            })
    }

    changeStatus(req, res, next) {
        Order.updateOne({ _id: req.body.id }, { trangThai: req.body.trangThai })
            .then(() => {
                res.json({
                    code: 0,
                    message: 'Thành công',
                })
            })
            .catch(() => {
                res.json({
                    code: 1,
                    message: 'Thất bại',
                })
            })
    }

    delete(req, res, next) {
        Order.deleteOne({ _id: req.body.id })
            .then(() => {
                res.json({
                    code: 0,
                    message: 'Thành công',
                })
            })
            .catch(() => {
                res.json({
                    code: 1,
                    message: 'Thất bại',
                })
            })
    }
}

module.exports = new OrderController();
