/**
 * Created by eltntawy on 21/02/15.
 */

var menuStage = {    
    preload : function () {
        
    } ,
    
    create : function() {


        /**************************************************************************************/
        // start the P2JS physics system
        /**************************************************************************************/
        game.physics.startSystem(Phaser.Physics.P2JS);
        
        /**************************************************************************************/
        // for just developing add button hear and set an action for that button to start your stage
        // ex :
        /**************************************************************************************/
        var btn = game.add.button(game.world.centerX,game.world.centerY,'btn1',this.clickAction);
        btn.anchor.setTo(0.5,0.5);
        /**************************************************************************************/
    }, 
    update : function () {

        
    },
    clickAction : function () {
        /**************************************************************************************/
        // start the game stage
        /**************************************************************************************/
        game.state.start('scoreStage');

        // these are for debugging single stages
        // game.state.start('runningStage');
        // game.state.start('forkStage');
        
        /**************************************************************************************/
        // logger
        console.log('menuStage : gameStage is started');
    }

    // , startCable: function () {
    //     game.state.start('cableStage');
    // }
    
}