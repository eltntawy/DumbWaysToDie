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

        game.load.atlas('success', 'assets/home/home.png', 'assets/home/home.json');
        game.load.atlas('fail', 'assets/Electricity/Electrical_fail.gif');

        /**************************************************************************************/
        // set the time after which the game ends
        game.time.events.add(Phaser.Timer.SECOND * globals.duration, this.endStage, this);
    },

    create: function () {

        /**************************************************************************************/
        // background, score and sound
        /**************************************************************************************/
        var background = game.add.sprite(0, 0, 'success');
        background.animations.add('animate', [0, 1], 5, true);
        background.animations.play('animate');
        /**************************************************************************************/
    },

    update: function () {


    },
    duration: 5,
    endStage: function () {
        globals.score += 100;
        globals.difficulty++;
        game.state.start('scoreStage');
    }
}