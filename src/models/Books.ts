import { Schema, model } from 'mongoose';

const Libros = new Schema({
    titulo: { type: String, required: true },
    author: { type: String, required: true },
    fecha: { type: Date, required: true },
    tematica: { type: String, required: true },
    isbn: { type: String, required: true },
});
const Book = model('Libros', Libros);
export default Book;