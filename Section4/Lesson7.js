const fs = require("fs");

const addNote = function(title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title;
    });
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log("\nNew Note Added Successfully!!!\n");
    } else {
        console.log("\nNote Title already existed!!!\n");
    }
};

const removeNote = function(title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title;
    });

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note removed"));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse("No note found"));
    }
};

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
};