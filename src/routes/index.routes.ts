import { Router } from 'express';
const router = Router();

import { IndexGets, IndexGet, IndexPost, IndexPut, IndexDelete } from '../controllers/IndexController';

router.route('/')
    .get(IndexGets)
    .post(IndexPost);
    
router.route('/:id')
    .get(IndexGet)
    .put(IndexPut)
    .delete(IndexDelete);

export default router;