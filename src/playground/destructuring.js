const address = ['Kloof 15c', 'Amsterdam', 'Nederland', '1011JT'];
const [, city, country = 'Belgie'] = address;

console.log(`You are in ${country}, ${city} `)


const item = ['coffee', '2,50', '3,00', '4,00'];

const [drink, , m, l ='5,00'] = item;

console.log(`A medium ${drink} costs ${l}`)
// const person = {
//     name: 'Aafke',
//     age: 26, 
//     location: {
//         city: 'Philadelphia', 
//         temp: 93
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;

// const { city, temp: temperature } = person.location;

// console.log(`${firstName} is ${age}.`);


// if ( city && temperature ) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'The Karamazov Brothers',
//     author: 'Dostojevski', 
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName);
