import Router from "express"
import Note from "../models/Note.js"

const router = Router()

// Create a new note
router.post("/notes", async (req, res) => {
    try {
        const { title, content } = req.body
        const newNote = new Note({ title, content })
        await newNote.save()
        res.status(201).json({ message: "Note created", note: newNote })
    } catch (error) {
        res.status(500).json({ message: "Server Error", error })
    }
})

// Get all notes
router.get("/notes", async (req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        res.status(500).json({ message: "Server Error", error })
    }
})

// Update a note
router.put("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dataToUpdate = req.body;
    const note = await Note.findByIdAndUpdate(id, dataToUpdate, { new: true });
    res.status(200).json({ message: "Updated Successfully!", note });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a note
router.delete("/notes/:id", async (req, res) => {
    try {
        const { id } = req.params
        await Note.findByIdAndDelete(id)
        res.status(200).json({ message: "Note deleted" })
    } catch (error) {
        res.status(500).json({ message: "Server Error", error })
    }
})
export default router