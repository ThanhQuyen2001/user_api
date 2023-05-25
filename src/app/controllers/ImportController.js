const Import = require('../models/Import');
const Product = require('../models/Product');

class ImportController {
    findOne(req, res, next) {
        Import.findOne({ _id: req.query.id })
            .then((imp) =>
                res.json({
                    code: 0,
                    data: imp,
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
        Import.find({ ten: { $regex: req.query.search ? req.query.search : '' }, ...payload })
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
        Import.create(req.body)
        Product.findOne({ ten: req.body.ten })
            .then((product) => {
                let total = Number(product.soLuong) + Number(req.body.soLuong);
                Product.updateOne({ ten: req.body.ten }, { soLuong: total})
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
            })
            .catch(() => {
                res.json({
                    code: 1,
                    message: 'Thất bại',
                })
            })
            .catch(() => {
                res.json({
                    code: 0,
                    data: null,
                    message: 'Thành công',
                })
            });

    }

    update(req, res, next) {
        Import.updateOne({ _id: req.body._id }, req.body)
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
        Import.deleteOne({ _id: req.body.id })
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

module.exports = new ImportController();
