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
        game.load.atlas('fail', 'assets/Electricity/fire.png','assets/Electricity/fire.json');

        /**************************************************************************************/
        // set the time after which the game ends
        game.time.events.add(Phaser.Timer.SECOND * this.duration, this.endStage, this);
    },

    create: function () {


        /**************************************************************************************/
        // background, score and sound
        /**************************************************************************************/
        var background = game.add.sprite(0, 0, 'fail');
        background.animations.add('fire',[0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,21 ,22 ,23 ,24 ,25 ,26 ,27 ,28 ,29 ,30 ,31 ,32 ,33 ,34 ,35 ,36 ,37 ,38 ,39 ,40 ,41 ,42 ,43 ,44 ,45 ,46 ,47 ,48 ,49 ,50 ,51 ,52 ,53 ,54 ,55 ,56 ,57 ,58 ,59 ,60],10,true);
        //background.animations.play();
        background.play('fire');
        /**************************************************************************************/

    },

    update: function () {

    },
    duration: 5,
    endStage: function () {
        globals.score -= 50;
        globals.lives --;
        game.state.start('scoreStage');
}
}