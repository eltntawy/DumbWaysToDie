/**
 * Created by eltntawy on 24/02/15.
 */
var buttonup;
var buttondown;

var dontPressTheButtonStage = {
    preload: function () {

        /**************************************************************************************/
        // background, score and sound 
        /**************************************************************************************/
        game.load.image('button_up','assets/Dont_press_the_red_button_app.png');
        game.load.image('button_down', 'assets/Dont_press_the_red_button_app_pressed.png');
        game.load.atlas('fail', 'assets/dontpressthebutton/fail.png', 'assets/dontpressthebutton/fail.json');


        // duration bar
        this.preloadBar = game.add.graphics(0, 3);
        this.preloadBar.lineStyle(3, 0xaa3300, 1);
        this.preloadBar.moveTo(0, 0);
        this.preloadBar.lineTo(game.width, 0);
        this.preloadBar.scale.x = 1;
        this.preloadBar.scale.y = 3;

        // set the time after which the game ends
        game.time.events.add(Phaser.Timer.SECOND * globals.duration, this.endStage, this);

        // moves duration bar
        game.time.events.repeat(Phaser.Timer.SECOND / 20, globals.duration * 20, this.decreaseTimer, this);


        /**************************************************************************************/
        // logger
        console.log('gameStage : preload finished');
    },

    create: function () {

        /**************************************************************************************/
        // background,   and sound
        /**************************************************************************************/
        game.backgroundColor = 0xf545ff;
        scoreText = game.add.text(10, 10, 'Game Score : ' + globals.score, {fontsize: 60, fill: 'white'});
        /**************************************************************************************/


        buttondown = game.add.button(0, 0, 'button_down', this.pressButton);
        buttondown.scale.setTo(1.3, 1.8);

        buttonup = game.add.button(0, 0, 'button_up', this.pressButton);
        buttonup.scale.setTo(1.3, 1.8);
        /**************************************************************************************/
        // platform
        /**************************************************************************************/
        // insert code here

        /**************************************************************************************/

        /**************************************************************************************/
        // player
        /**************************************************************************************/
        // insert code here
        
        /**************************************************************************************/


        // logger
        console.log('gameStage : creation finished');
    },

    update: function () {
        //  

    },
    pressButton: function () {
        buttonup.kill();
        buttondown.kill();
        var fail = game.add.sprite(0, 0, 'fail');
        fail.scale.setTo(1.8, 1.8);
        var failAnimation = fail.animations.add('animate', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57], 10, false, this.endStage);
        fail.animations.play('animate');
        failAnimation.killOnComplete = true;
        failAnimation.onComplete.add(function () {
            globals.score -= 50;
            globals.lives--;
            game.state.start('scoreStage');
        });
    },
    endStage: function () {

        globals.score+=100;
        game.state.start('scoreStage');

    },
    decreaseTimer: function () {
        this.preloadBar.scale.x -= 1 / globals.duration / 20;
    }
}