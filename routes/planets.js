import { Router } from "express";
import * as controllers from "../controllers/planets.js"

const router = Router()

router.get('/planets', controllers.getPlanets)
router.get('/planets/:planet', controllers.getPlanet)
router.post('/planet', controllers.addPlanet)
router.put('/planets/:planet', controllers.updatePlanet)
router.delete('/planets/:planet', controllers.deletePlanet)

export default router;