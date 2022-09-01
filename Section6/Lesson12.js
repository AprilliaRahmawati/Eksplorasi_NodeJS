const name = 'April'
const userAge = 19

const user1 = {
    name,
    age: userAge,
    location: 'Bandung'
}

console.log(user1)

//Destucting Object

const user2 = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
}

const { age, location: address } = user2
console.log(age)
console.log(address)


const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('Order', product)