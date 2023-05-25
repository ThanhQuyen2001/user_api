const Producer = require('../models/Producer');

class ProducerController {
    findOne(req, res, next) {
        Producer.findOne({ _id: req.query.id })
            .then((producer) =>
                res.json({
                    code: 0,
                    data: producer,
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
        Producer.find({})
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
        Producer.create(req.body)
        Producer.create({...req.body})
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
        Producer.updateOne({ _id: req.body._id }, req.body)
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
        Producer.deleteOne({ _id: req.body.id })
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

module.exports = new ProducerController();
