import { realizarApuestaService } from "../services/apuestaService.js";

export const realizarApuesta = async (req, res) => {
    try {
        const resultado = await realizarApuestaService(req.params.id, req.body);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}