// const {register} = require("../controllers/usersController");
// const {login} = require("../controllers/usersController");
// const {setAvatar} = require("../controllers/usersController");

const { addMessage, getAllMesssage } = require("../controllers/messagesController");

// const {getAllUsers} = require("../controllers/usersController");
const router = require("express").Router();

router.post("/addmsg", addMessage);
router.post("/getmsg", getAllMesssage);

module.exports = router;