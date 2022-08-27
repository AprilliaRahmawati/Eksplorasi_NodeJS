const yargs = require("yargs");
const notes = require("./Lesson6");
yargs.version("1.1.0");

console.log(yargs.argv);
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string",
        },
    },
    handler: function(argv) {
        const _note = notes.addNote(agrv.title, argv.body);
    },
});