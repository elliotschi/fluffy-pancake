'use strict'
const Firebase = require('firebase');
const fluffyPancakes = new Firebase('https://fluffy-pancakes.firebaseIO.com/');
const Promise = require('bluebird');
const request = Promise.promisify(require('request'));

request({
  method: 'POST',
  uri: 'http://api.probasketballapi.com/player?api_key=q9QOom0X7nFHapRVdcb2hrgU6YvMwG4K'
})
.then(function(response, body) {
  let data = JSON.parse(response.body);
  
  // data.forEach((player) => {
  //   let playerObj = {
  //     id: player.id,
  //     player_name: player.player_name
  //   }
  //   fluffyPancakes.push(playerObj)
  //     .then(() => {
  //       console.log('pushed in player object');
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     })
  // });
  Promise.each(data, player => {
    let playObj = {
      id: player.id,
      player_name: player.player_name
    };
    
    fluffyPancakes.push(playerObj)
      .then(() => {
        console.log('pushed in player object');
      })
      .catch(err => {
        console.error(err);
      });
  })
  .then(() => {
    console.log('done printing out each player');
  })
})
.catch(err => {
  console.error(err);
});


