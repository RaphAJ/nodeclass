const jokes = require('give-me-a-joke')
const capital = require('to-capital-case')

jokes.getRandomDadJoke (function(joke) {
    console.log(capital(joke))  
});



