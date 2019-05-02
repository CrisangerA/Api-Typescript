import { Request, Response } from 'express';
import Book from '../models/Books'
//import { Books } from '../interfaces/Books';

export async function IndexGets(req: Request, res: Response): Promise<Response> {
    const books = await Book.find();
    return res.json(books);
};

export async function IndexGet(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.json(book);
};

export async function IndexPost(req: Request, res: Response) {
    const newBook = new Book(req.body);
    await newBook.save();
    res.json('Received');
}

export async function IndexPut(req: Request, res: Response) {
    const { id } = req.params;
    const editBook = {
        titulo: req.body.titulo,
        author: req.body.author,
        fecha: req.body.fecha,
        tematica: req.body.tematica,
        isbn: req.body.isbn
    }
    await Book.findByIdAndUpdate(id, {$set: editBook});
    res.json('Edited');
}

export async function IndexDelete(req: Request, res: Response) {
    const { id } = req.params;
    await Book.findByIdAndRemove(id);
    res.json('Deleted');
}