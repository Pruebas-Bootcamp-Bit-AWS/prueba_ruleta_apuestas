import mongoose from "mongoose";

const apuestaSchema = mongoose.Schema({

    tipo: {
        type: String,
        enum: ['numero', 'color'],
        required: true
    },
    valor: {
        type: mongoose.Mixed,
        required: true
    },
    valor_apuesta: {
        type: Number,
        required: true
    },
    ganancia: {
        type: Number,
        default: 0
    },
    ruleta_rel: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ruleta',
        required: true
    }]

})

const Apuesta = mongoose.model('apuesta', apuestaSchema);
export default Apuesta;