import mongoose from "mongoose";
//const Schema = mongoose.Schema

let Planet = new mongoose.Schema({
  "position": { type: Number },
  "name": { type: String },
  "image": { type: String },
  "velocity": { type: String },
  "distance": { type: Number },
  "description": { type: String }
})

export default mongoose.model('planets', Planet)