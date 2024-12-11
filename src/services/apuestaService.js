import Apuesta from '../models/apuesta.js';
import Ruleta from '../models/ruleta.js';

export const cacularGanancia = (tipo, valor, numeroGanador, colorGanador, cantidad) => {
    try {

        let ganancia = 0;
        if (tipo === 'numero' && valor === numeroGanador) {
            ganancia = cantidad * 5;
        } else if (tipo === 'color' && valor === colorGanador){
            ganancia = cantidad * 1.8;
        }
        return ganancia;

    } catch (error) {
        throw new error(`Error al calcular las ganacias: ${error.message}`);
    }
}

export const realizarApuestaService = async (ruletaId, apuestaData) => {
    try {
        const ruleta = await Ruleta.findById(ruletaId);
        if (ruleta && ruleta.estado === 'abierta') {
            const {tipo, valor, valor_apuesta} = apuestaData;
            if (valor_apuesta > 10000) {
                throw new error(`La cantidad para apostar permitida es de maximo 10000`);
            }
            if ((tipo === 'numero' && valor >= 0 && valor <=36) || (tipo === 'color' && (valor === 'rojo' || valor === 'negro'))) {
                const nuevaApuesta = new Apuesta({ ruletaId, tipo, valor, valor_apuesta});
                await nuevaApuesta.save();
                ruleta.apuestas.push(nuevaApuesta._id);
                await ruleta.save();
                return { estado: 'Apuesta aceptada'};
            } else {
                throw new Error('Apuesta inválida');
            }
        } else {
            throw new Error('Ruleta no encontrada o cerrada');
        }
    } catch (error) {
        throw new error(`Error al realizar la apuesta: ${error.message}`);
    }
}