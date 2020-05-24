const express = require('express');
const router = express.Router();
const notes = require('../db/db.json');


// getting all notes from the db

    router.get('/', (req, res) => {
        res.send(notes);
    })


// saving a note to the db

    router.post('/', (req, res) => {
        const note = {
            id: notes.length + 1,
            notes: note // how do we pull in "data: note" from ajax request?
        }
    })

// deleting a note from the db

    router.delete('/:id', (req, res) => {
        // Find note in array
        const note = notes.find(c => c.id === parseInt(req.params.id));

        // Delete
        const index = notes.indexOf(note);
        notes.splice(index, 1);

        // Return note in array
        res.send(note)

    })


module.exports = router;