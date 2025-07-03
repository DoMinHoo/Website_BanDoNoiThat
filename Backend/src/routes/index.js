const express = require('express');
const router = express.Router();
const userRouter = require('./auth.routes');
const categoryRouter = require('./category.routes');
const userRoutes = require("./user.routes");
const reviewRoutes = require("./review.routes");
const productRoutes = require("./product.routes");
const orderRoutes = require("./order.routes");
const variationRoutes = require("./variation.routes");
const bannerRoutes = require("./banner.routes");
const materialsRoutes = require("./materials.routes");
const statsRoutes = require("./stats.routes");
const vnpayRouter = require('./vnpay');

const promotionRoutes = require("./promotion.route");

const cartRoutes = require("./cart.routes")

const paymentZaloRoutes = require('./payment.routes');


router.use('/auth', userRouter);
router.use('/categories', categoryRouter);
router.use("/users", userRoutes);
router.use("/reviews", reviewRoutes);
router.use('/products', productRoutes);
router.use('/orders', orderRoutes);
router.use('/', variationRoutes);
router.use('/banners', bannerRoutes);
router.use("/promotions", promotionRoutes);
router.use('/carts', cartRoutes);
router.use('/materials', materialsRoutes);
router.use('/stats', statsRoutes);

router.use('/zalo-payment', paymentZaloRoutes)

router.use('/vnpay', vnpayRouter);





module.exports = router;
