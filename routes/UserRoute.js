import express from 'express';
import { getNotes, getByOwner, createNote, updateNote, deleteNote } from '../cotrollers/NoteController.js';

const router = express.Router();

router.get("/getAllNotes", getNotes);
router.get("/getNotesByOwner/:owner", getByOwner);
router.post("/createNote", createNote);
router.put("/updateNote/:owner/:id", updateNote);
router.delete("/deleteNote/:owner/:id", deleteNote);

export default router;