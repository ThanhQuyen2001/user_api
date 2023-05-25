const Config = require('../models/Config');

class ConfigController {
    findOne(req, res, next) {
        Config.findOne({ _id: req.query.id })
            .then((config) =>
                res.json({
                    code: 0,
                    data: config,
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
        Config.find({cauHinh: req.query.cauHinh})
            .then((config) =>
                res.json({
                    code: 0,
                    data: config,
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
        Config.create(req.body)
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

    update(req, res, next) {
        Config.updateOne({_id: req.body._id},{ten: req.body.ten})
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
        Config.deleteOne({ _id: req.body.id })
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

module.exports = new ConfigController();
