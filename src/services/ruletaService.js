import Ruleta from '../models/ruleta.js';

export const crearRuletaService = async () => {
    try {
        const nuevaRuleta = new Ruleta();
        await nuevaRuleta.save();
        return nuevaRuleta;
    } catch (error) {
        throw new error(`Error al crear la ruleta: ${error.message}`);
    }
}