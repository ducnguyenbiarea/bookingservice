import express from "express"
import { register } from "../controllers/auth.js"
import {login} from "../controllers/auth.js"
const router = express.Router()

router.post("/login", login)


router.post("/register", register)

export default router