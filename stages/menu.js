/**
 * Created by eltntawy on 21/02/15.
 */

var menuStage = {
    
    preload : function () {

        
    } ,
    
    create : function() {

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
        game.state.start('game');
        /**************************************************************************************/
        // logger
        console.log('menuStage : gameStage is started');
    }
    
}