import { Router } from "express";
import { crearRuleta } from "../controllers/ruletaController.js";
import { realizarApuesta } from "../controllers/apuestaController.js";

const router = Router();

router.post('/crear-ruleta', crearRuleta)
router.post('/apostar', realizarApuesta)

export default router;