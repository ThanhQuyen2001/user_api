const Notification = require('../models/Notification');

class NotificationController {
    findAll(req, res, next) {
        Notification.find({})
            .then((imports) =>
                res.json({
                    code: 0,
                    data: imports,
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

    create(req, res, next) {
        Notification.create(req.body)
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
        Notification.updateOne({ _id: req.body.id }, { trangThai: true })
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

module.exports = new NotificationController();
