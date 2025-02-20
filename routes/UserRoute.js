import express from 'express';
import { getNotes, getByOwner, createNote, updateNote } from '../cotrollers/NoteController.js';

const router = express.Router();

router.get("/notes", getNotes);
router.get("/notes/:owner", getByOwner);

router.post("/notes", createNote);

router.put("/notes/:owner/:id", updateNote);

export default router;