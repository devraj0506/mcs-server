import express from 'express'
import { getAllCa,getCa } from './Controller.js';
const router = express.Router();
router.get('/', getAllCa);

router.get('/:id',getCa)

export default router;