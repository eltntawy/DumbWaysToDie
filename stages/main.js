/**
 * Created by eltntawy on 24/02/15.
 */


/**************************************************************************************/
// Dont forget to load your script first in index.html by ordering of use
/**************************************************************************************/

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

game.state.add('preload', preloadStage);    // for resource loading
game.state.add('menu', menuStage);          // for menu stage and game entry point
game.state.add('scoreStage', scoreStage);          // the score stage
game.state.add('game', gameStage);          // the game stage

game.state.add('cableStage', cableStage);          // the cable stage
game.state.add('forkStage', forkStage);            // the fork stage
game.state.add('runningStage', runningStage);            // the fork stage
game.state.add('pokeTheBearStage', pokeTheBearStage); //the poke stage

// globals
var globals = {
	// add your stage to this stages array to make the game choose randomly from it
    stages: ['cableStage', 'forkStage', 'runningStage', 'pokeTheBearStage'],

    score: 0,
    lives: 3
}

// this stage for loading resources from the system and display loading progress user
game.state.start('preload');