import Apuesta from '../models/apuesta.js';
import Ruleta from '../models/ruleta.js';

export const cacularGanancia = (valor, numeroGanador, colorGanador, cantidad) => {
    try {

        let ganancia = 0; 
        const apuestaNumero = parseInt(valor.split(' ')[0], 10); 
        const apuestaColor = valor.split(' ')[1];
        if (apuestaNumero === numeroGanador) { 
            ganancia = cantidad * 5; 
        } else if (apuestaColor === colorGanador) { 
            ganancia = cantidad * 1.8;
        }       
        return ganancia;

    } catch (error) {
        throw new error(`Error al calcular las ganacias: ${error.message}`);
    }
};

export const realizarApuestaService = async (ruletaId, apuestaData) => {
    try {
        const ruleta = await Ruleta.findById(ruletaId);
        if (ruleta && ruleta.estado === 'abierta') {
            const {tipo, valor, valor_apuesta} = apuestaData;
            const numero = parseInt(valor.split(' ')[0], 10); 
            const color = valor.split(' ')[1];
            if (valor_apuesta > 10000) {
                throw new error(`La cantidad para apostar permitida es de maximo 10000`);
            }
            if (numero >= 0 && numero <= 36 && (color === 'rojo' || color === 'negro')) { 
                const nuevaApuesta = new Apuesta({ ruletaId, tipo, valor, cantidad }); 
                await nuevaApuesta.save(); 
                ruleta.apuestas.push(nuevaApuesta._id); 
                await ruleta.save(); 
                return { estado: 'Apuesta aceptada' }; 
            } else { 
                throw new Error('Apuesta inválida');
            }
        } else {
            throw new Error('Ruleta no encontrada o cerrada');
        }
    } catch (error) {
        throw new error(`Error al realizar la apuesta: ${error.message}`);
    }
};