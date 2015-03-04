/**
 * Created by eltntawy on 02/03/15.
 */
/**
 * Created by eltntawy on 02/03/15.
 */
/**
 * Created by eltntawy on 24/02/15.
 */

var timeout = 0;
var timeToWait = 200;

var electricityFail = {
    preload: function () {

        /**************************************************************************************/
        // background, score and sound
        /**************************************************************************************/
        game.load.image('fail', 'assets/Electricity/Electrical_work.gif');

        /**************************************************************************************/

    },

    create: function () {


        /**************************************************************************************/
        // background, score and sound
        /**************************************************************************************/
        var background = game.add.sprite(0, 0, 'fail');
        background.animations.play();
        background.play();
        /**************************************************************************************/
    },

    update: function () {

        timeout++;

        if (timeout >= timeToWait) {
            game.state.start('menu');
        }

    }
}