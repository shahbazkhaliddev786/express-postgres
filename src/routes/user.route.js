const express = require("express");

const {AllUsers, findOneUser, signUp, updateUser, deleteUser} = require("../controllers/user.controller.js");
const router = express.Router();

router.get('/', AllUsers);
router.get('/:id', findOneUser);
router.post('/signup', signUp);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;