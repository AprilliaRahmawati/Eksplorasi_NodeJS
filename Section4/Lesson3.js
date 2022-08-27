const yargs = require('yargs')
const command = process.argv[2]
if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
}

yargs.version('1.1.0')
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!')
    }
})
console.log(yargs.argv)