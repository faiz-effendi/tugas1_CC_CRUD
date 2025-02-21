import express from 'express';
import { getNotes, getByOwner, createNote, updateNote, deleteNote } from '../cotrollers/NoteController.js';

const router = express.Router();

router.get("/notes", getNotes);
router.get("/notes/:owner", getByOwner);
router.post("/notes", createNote);
router.patch("/notes/:owner/:id", updateNote);
router.delete("/notes/:owner/:id", deleteNote);

export default router;