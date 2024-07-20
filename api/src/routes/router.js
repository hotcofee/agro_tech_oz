import {Router} from 'express'
import { createUser, getPlantations } from '../controllers/agro.controllers.js'

const router = Router()
router.get("/plantations", getPlantations)
router.post("/users/create", createUser)
export default router