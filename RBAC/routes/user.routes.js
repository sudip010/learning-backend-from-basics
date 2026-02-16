const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");
const userController = require("../controllers/user.controller");

router.get("/users",authMiddleware,roleMiddleware("admin"),userController.getAllUsers);
router.get("/profile",authMiddleware,userController.getProfile);
router.delete("/users/:id",authMiddleware,roleMiddleware("admin"),userController.deleteUser);

module.exports = router;