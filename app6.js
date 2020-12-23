for (let count = 0; count <= 10; count++) {
    console.log(count)
}

let number = 13
while (number <= 10) {
    console.log(number)
    number++
}

let counter = 14
do {
    console.log(counter) // Printed 14
    counter++ // Now 15
} while (counter <= 10) // Doesn't Run Again

let people = [
    {
        name: "Ethan",
        email: "ethaniel.may@gmail.com"
    },
    {
        name: "Geralt",
        email: "geraltofrivia@gmail.com"
    },
    {
        name: "Triss",
        email: "trissmarigold@gmail.com"
    }
]

for (let i = 0; i < people.length; i++) {
    let person = people[i]
    console.log("Name: ", person.name, "\nEmail: ", person.email)
}