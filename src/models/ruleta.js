import mongoose from 'mongoose';

const ruletaSchema = mongoose.Schema({

    estado: {
        type: String,
        enum: ['abierto', 'cerrada'],
        default: 'cerrada'
    },
    apuestas_rel: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Apuesta'
    }]

})

const Ruleta = mongoose.model('ruleta', ruletaSchema);
export default Ruleta;