/**
 * Created by eltntawy on 02/03/15.
 */
/**
 * Created by eltntawy on 24/02/15.
 */



var electricitySuccess = {
    preload: function () {

        /**************************************************************************************/
        // background, score and sound
        /**************************************************************************************/

        game.load.atlas('success', 'assets/Electricity/work.png', 'assets/Electricity/work.json');

        /**************************************************************************************/
    },

    create: function () {

        /**************************************************************************************/
        // background, score and sound
        /**************************************************************************************/
        var background = game.add.sprite(0, 0, 'success');
        background.scale.setTo(.80,.80);
        var successAnimation = background.animations.add('animate', [0, 1,2,3], 10);
        background.animations.play('animate');

        successAnimation.killOnComplete = true;
        successAnimation.onComplete.add(function () {
            globals.score += 100;
            globals.difficulty++;
            game.state.start('scoreStage');
        });
        /**************************************************************************************/
    },

    update: function () {


    }
}