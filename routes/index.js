const Router = require("express");
const router = new Router();

const postRouter = require("./postRouter");
const errorHandler = require("../middlewares/errorHandler");

router.use("/post", postRouter);
router.use(errorHandler);

module.exports = router;
