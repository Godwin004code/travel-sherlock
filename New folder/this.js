
const person = { kind: 'human'}

const user = Object.create(person)
user.name = 'Max'

Object.setPrototypeOf(user, {kind: 'mammal'})

console.log(user);

