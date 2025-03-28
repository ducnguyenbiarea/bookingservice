import express from "express"
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js"
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js"
const router = express.Router()

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user, you are logged in and can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello admin, you are logged in and can delete all accounts")
// })

// update
router.put("/:id", verifyUser, updateUser)

// delete
router.delete("/:id", verifyUser, deleteUser)

// get
router.get("/:id", verifyUser, getUser)

// get all
router.get("/",  verifyAdmin, getUsers)


export default router