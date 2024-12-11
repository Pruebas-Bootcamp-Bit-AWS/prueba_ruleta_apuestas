import { Router } from "express";
import ruletaRoutes from './ruleta.routes.js'

const router = Router();

router.use('/ruleta',ruletaRoutes);

export default router;