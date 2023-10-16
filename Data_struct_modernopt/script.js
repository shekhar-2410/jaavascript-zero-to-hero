// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

'use strict';

const game = {
  team1: ' Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Hector',
      'Petr',
      'Olivier',
      'Alex',
      'Laurent',
      'Mesut',
      'Alexis',
      'Theo',
      'Marcos',
      'Cesar',
      'Gary',
    ],
    [
      'Diego',
      'Thibaut',
      'Eden',
      'Nemanja',
      'Victor',
      'Willian',
      'Christian',
      'Daniel',
      'Robert',
      'Riyad',
      'Wes',
    ],
  ],
  score: '4:0',
};

const [player1, player2] = game.players;

const [gk1, ...fp1] = player1;

const [gk2, ...fp2] = player2;

const allPlayers = [...player1,...player2]


const player1Final = [...player1,"Thjiago","Cotiano","Periscric"]

const printGoals = function(...players){
    console.log((`${players.length}gaols were scored`));
}

 for(const item of player1) console.log(item)
