const Product = require('../models/Product');

class ProductController {
    findOne(req, res, next) {
        Product.findOne({ _id: req.query.id })
            .then((product) =>
                res.json({
                    code: 0,
                    data: product,
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
        if(req.query.phanLoai) {
            payload.phanLoai = req.query.phanLoai
        }
        if(req.query.trangThai) {
            payload.trangThai = req.query.trangThai
        }
        Product.find({ten: { $regex: req.query.search?req.query.search:'' },...payload})
            .then((products) =>
                res.json({
                    code: 0,
                    data: products,
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
        Product.create({...req.body,soLuong: 0, trangThai: 2})
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
        Product.updateOne({_id: req.body._id},req.body)
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
        Product.updateOne({_id: req.body.id},{trangThai: req.body.trangThai})
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
        Product.deleteOne({ _id: req.body.id })
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

module.exports = new ProductController();
