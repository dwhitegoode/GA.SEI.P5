import { Router } from "express"
import res from "express/lib/response.js"
import planetRoutes from "./planets.js"

const router = Router()

router.get('/', (req, res) => res.send('api root'))

router.use('/', planetRoutes)

export default router;
