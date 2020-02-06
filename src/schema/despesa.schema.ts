import * as mongoose from 'mongoose';

export const DespesaSchema = new mongoose.Schema({
  id: Number,
  descricao: String,
  data: Date,
  valor: Number,
});
