/**
 * Created by eltntawy on 24/02/15.
 */

var preloadStage = {

    preload : function () {



        this.stage.backgroundColor = '#B4D9E7';
        this.preloadBar = this.add.sprite((game.world.width-311)/2, (game.world.height-27)/2, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);
        /**************************************************************************************/
        // loading images
        /**************************************************************************************/
        game.load.image('btn1','assets/btn/btn.png');
        /**************************************************************************************/
        game.load.spritesheet('button_up','assets/dontpressthebutton/press_me.png',401, 143);
        //game.load.image('button_down', 'assets/press_me.png');
        game.load.atlas('dontpressthebuttonfail', 'assets/dontpressthebutton/fail.png', 'assets/dontpressthebutton/fail.json');


        //game.load.atlas('homeBackground','assets/home/home.png','assets/home/home.json');
        game.load.image('balls', 'assets/home/red-button-badge-circle-gloss.png', 50, 50);

        game.load.image('background','assets/Electricity/background.png');

        //game.load.image('success','assets/Electricity/Home Lighting on-off.png');
        //game.load.image('fail','assets/Electricity/Electrical_work.gif');

        game.load.image('cable1_up', 'assets/Electricity/1_up.png');
        game.load.image('cable2_up', 'assets/Electricity/2_up.png');
        game.load.image('cable3_up', 'assets/Electricity/3_up.png');

        game.load.image('cable1_down', 'assets/Electricity/1_down.png');
        game.load.image('cable2_down', 'assets/Electricity/2_down.png');
        game.load.image('cable3_down', 'assets/Electricity/3_down.png');

        game.load.atlas('electricitySuccess', 'assets/Electricity/work.png', 'assets/Electricity/work.json');
        game.load.atlas('electricityFail', 'assets/Electricity/fire.png','assets/Electricity/fire.json');


        game.load.image('scoreBackground', 'assets/score/background.png')
        game.load.atlas('playerDance', 'assets/score/dance.png', 'assets/score/dance.json');
        game.load.image('playerDie', 'assets/score/die.png');
        game.load.image('logo','assets/dwtd_logo.png');

        game.load.image('playButtonUnpressed', 'assets/menu/playButtonUnpressed.png');
        game.load.image('playButtonPressed', 'assets/menu/playButtonPressed.png');

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