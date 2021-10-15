const mongoose = require('../database/index');


const EmpresasSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  area: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Area',
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Empresa = mongoose.model('Empresas', EmpresasSchema);

module.exports = Empresa;