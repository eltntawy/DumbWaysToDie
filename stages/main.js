/**
 * Created by eltntawy on 24/02/15.
 */


/**************************************************************************************/
// Dont forget to load your script first in index.html by ordering of use
/**************************************************************************************/

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

game.state.add('preload', preloadStage);    // for resource loading
game.state.add('menu', menuStage);          // for menu stage and game entry point
game.state.add('game', gameStage);          // the game stage

// this stage for loading resources from the system and display loading progress user
game.state.start('preload');