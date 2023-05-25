const configsRouter = require('./configs');
const usersRouter = require('./users');
const productsRouter = require('./products');
const importsRouter = require('./imports');
const ordersRouter = require('./orders');
const producersRouter = require('./producers');
const voucherController = require('./vouchers');
const notificationController = require('./notifications')

function route(app) {
    app.use('/api/config', configsRouter);
    app.use('/api/user', usersRouter)
    app.use('/api/product', productsRouter)
    app.use('/api/import', importsRouter)
    app.use('/api/order', ordersRouter)
    app.use('/api/producer', producersRouter)
    app.use('/api/voucher', voucherController)
    app.use('/api/notification', notificationController)
}

module.exports = route;
