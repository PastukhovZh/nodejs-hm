const express = require("express");

const {validation, ctrlWrapper, auth} = require("../../middlewares");
const {joiSchema} = require("../../models/contact");
const {contacts: ctrl} = require("../../controllers")

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.post('/', auth, validation(joiSchema), ctrlWrapper(ctrl.add))


router.put("/:id", validation(joiSchema), ctrlWrapper(ctrl.updateById));

router.patch("/:id/favorite", ctrlWrapper(ctrl.updateStatusContact));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;

