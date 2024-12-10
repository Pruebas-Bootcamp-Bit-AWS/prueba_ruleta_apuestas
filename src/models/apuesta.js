import { model,Schema } from "mongoose";

const apuestaSchema = Schema({

    id_user: {

    },
    numero_ganador: {

    },
    color_ganador: {

    },
    dinero: {
        type: Number,
        required: true
    },
    ruleta_rel: [{
        type: mongoose.Schema.Types.objectId,
        ref: 'Apuesta',
        required: true
    }]

})