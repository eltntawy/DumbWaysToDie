/**
 * Created by eltntawy on 06/03/15.
 */


var gameoverStage = {
    preload: function() {

        game.load.image('background','assets/score/background.png')
        game.load.atlas('player','assets/score/dance.png','assets/score/dance.json');


    },

    create: function() {

        var txt = 'Score \n'+score
        scoreText = game.add.text(game.world.width/2,game.world.height/2 -100,txt, {fontsize: 10, fill: 'white'});
        scoreText.anchor.setTo(0.5,0.5);

    },

    update: function() {

    }
}