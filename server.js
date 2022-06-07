const express = require('express')
const app = express()
const PORT = 8000

const finalRounds = { //made lower case names
    'fall mountain': {
        'objective': 'Grab the crown!',
        'howToPlay': 'Reach the top of the mountain first and use Grab to GRAB the CROWN!',
        'participants': '2-9',
        'addedIn': 'Beta (25 July 2020)'
    },
    'hex-a-gone': {
        'objective': 'Last one standing!',
        'howToPlay': 'Floor pieces fall away when you stand on them - keep moving and survive longest to WIN the CROWN!',
        'participants': '4-12',
        'addedIn': 'Beta (July 2020)'
       },
    'jump showdown': {
        'objective': 'Last one standing!',
        'howToPlay': 'JUMP over the spinning beam and avoid the falling floor to WIN the CROWN!',
        'participants': '2-12',
        'addedIn': 'Beta (July 2020)'
       },
    'lost temple': {
        'objective': 'Grab the crown!',
        'howToPlay': 'Break through doors to reach the crown at the end of the maze - some are real, some are fake!',
        'participants': '2-15',
        'addedIn': 'Season 5 (20 July 2021)'
       },
    'roll off': {
        'objective': 'Don\'t fall off!',
        'howToPlay': 'Move between rotating rings to avoid the rising slime!',
        'participants': '2-10',
        'addedIn': 'Season 3 (15 December 2020)'
       },
    'royal fumble': {
        'objective': 'Grab the tail!',
        'howToPlay': 'Use Grab to GRAB the TAIL and make sure you\'re wearing it when the timer runs out to WIN!',
        'participants': '4-6',
        'addedIn': 'Beta (25 July 2020)'
       },
    'thin ice': {
        'objective': 'Don\'t fall through!',
        'howToPlay': 'Stay atop the cracking ice to avoid the slime below!',
        'participants': '3-12',
        'addedIn': 'Season 3 (15 December 2020)'
       },
    'unknown': {
        'objective': 'unknown',
        'howToPlay': 'unknown',
        'participants': 'unknown',
        'addedIn': 'unknown'
    }
}
//looks like an event listener. instead of a click, it's a network request. when it hears network request, it fires a function, the request response etc
app.get('/', (request, response) => {
    //when someone goes to main page, serve html
    //we have to tell server where to look for file, so dirname
    response.sendFile(__dirname + '/index.html')
    
})

//if they make a request to localhost:8000/api , respond with json(rappers) which is an object of objects. Adding a colon after /api allows query parameters.
app.get('/api/:round', (request, response)=>{
    const roundName = request.params.round.toLowerCase() //grabs the paramaters, makes sure they're lower case
    //if rapperName is a property of rappers, respond with json. chance, unknown, and 21 savage are properties of rappers
    if(finalRounds[roundName]){
    response.json(finalRounds[roundName])
    }else{
        response.json(finalRounds['unknown'])
    }
    //console.log(rappers[rapperName].birthName)
})

//server needs to listen
//process.env.PORT || PORT --> heroku has a port set up in mind already, can't hard code PORT. It' saying try using whatever heroku is setting up as the port, and if it doesn't exist use the hardcoded PORT
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}`)
})