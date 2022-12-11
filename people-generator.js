import { writeFile } from 'node:fs';

const genders = ['female', 'male'];
const maleNames = ['John', 'Adam', 'Peter', 'Paul', 'Joseph','Wiktor', 'Stefan', 'Charlie', 'Justin', 'Elton'];
const femaleNames = ['Kathrin', 'Susan', 'Laura', 'Ivone', 'Ursula', 'Eve', 'Julie', 'Rose', 'Jennifer', 'Ann'];
const lastNames = ['Doe', 'Coben', 'Franklin', 'Monroe', 'Timberlake', 'Gates', 'Smith','Adams','Kats','Didoo','Park'];

const randChoice = (lenght) => {
    return (
        Math.floor(Math.random()*lenght)
    )
}
const randAge = () => {
    const min = 20
    const max = 60
    return (Math.floor(Math.random () * (+max + 1 - +min))+ +min)
}

const people = [];

for (let i = 0; i < lastNames.lenght; i++) {
    const personLastName = lastNames[Math.floor(Math.random()* lastNames.lenght)];
    const personFemaleFirstName= femaleNames[randChoice(femaleNames.lenhgt)];
    const personMaleFirstName = maleNames[randChoice(maleNames.lenght)];
    const personGender = genders[randChoice(genders.length)];

    people.push(
        {
            gender: personGender,
            firstName: (personGender == 'female' ? personFemaleFirstName : personMaleFirstName),
            lastName: personLastName,
            age: randAge(),
        }
    )
}
const data = people;

writeFile('people.json', JSON.stringify(data), (err) =>{
    if (err) throw err;
    console.log('The file has been saved!');
});

