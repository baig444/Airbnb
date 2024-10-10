
const {login, register, logout} = require("../controllers/AuthController");
const { addRoom, getRooms, deleteRoom, getroom } = require("../controllers/RoomController");
const authMiddleware = require("../Middleware/AuthMiddleware");
const upload = require('../Middleware/upload');
const router = require("express").Router();



router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);
router.post('/addroom',upload.array('images', 5),addRoom)
router.get("/dashboard",authMiddleware, (req, res) => {
    res.json({ message: "Welcome to the dashboard!" });
  });

  router.get("/getrooms", getRooms);
  router.get("/getroom/:id", getroom);
  router.delete('/deleteroom/:id',authMiddleware,deleteRoom)


module.exports = router