/**
 * Created by eltntawy on 24/02/15.
 */

var score = 0;
var scoreText;
var player;

var platforms;

// gameDifficulty - represent the current game difficulty
var gameDifficulty = 1;

var preloadStage = {

    preload : function () {
        
        /**************************************************************************************/
        // loading images
        /**************************************************************************************/
        game.load.image('btn1','assets/btn/btn.png');
        /**************************************************************************************/

        /**************************************************************************************/
        // loading sprites
        /**************************************************************************************/
        
        /**************************************************************************************/

        // logger
        console.log('preloadStage : preload is finished');
    } ,

    create : function() {
        
        game.state.start('menu');

        // logger
        console.log('preloadStage : menuStage is started');
    },
    update : function () {

    }
    
}