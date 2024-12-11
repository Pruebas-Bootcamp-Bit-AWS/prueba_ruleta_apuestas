import { crearRuletaService } from '../services/ruletaService.js';

export const crearRuleta = async (req, res) => {
    try {
        const nuevaRuleta = await crearRuletaService();
        res.json({ id: nuevaRuleta._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};