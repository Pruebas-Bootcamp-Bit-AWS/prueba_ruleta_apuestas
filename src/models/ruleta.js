import { model,Schema } from "mongoose";

const ruletaSchema = Schema({

    estado: {
        type: String,
        enum: ['abierto', 'cerrada'],
        default: 'cerrada'
    },
    apuestas_rel: [{
        type: mongoose.Schema.Types.objectId,
        ref: 'Apuesta'
    }]

})

const Ruleta = mongoose.model('ruleta', ruletaSchema);
model.exports = Ruleta;