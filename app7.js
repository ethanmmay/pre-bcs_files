let testnum 

function greeting(testnum) {
    console.log("test " + testnum)
}

for (let i = 0; i < 10; i++) {
    greeting(i)
}

let sentence = "Test Sentence"

greeting(sentence)