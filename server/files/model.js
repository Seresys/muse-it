import mongoose, { Schema } from 'mongoose';

const fileSchema = new Schema({
  name: String,
  originalName: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model('File', fileSchema);

