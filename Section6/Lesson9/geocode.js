const geocode = require('./geocode')

geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})