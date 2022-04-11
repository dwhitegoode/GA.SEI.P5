import { Router } from "express";
import * as controllers from "../controllers/planets.js"

const router = Router()

router.get('/planets', controllers.getPlanets)
router.get('/planets/:planet', controllers.getPlanet)
router.post('/planets', controllers.addPlanet)
router.put('/planets/:id', controllers.updatePlanet)
router.delete('/planets/:id', controllers.deletePlanet)

export default router;