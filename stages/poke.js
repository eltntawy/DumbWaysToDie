var pokeTheBearStage = {
    preload: function(){
        game.load.image('bearFace', 'assets/pokeTheBear/bearFace.png');
    },

    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = "#34dbdb";

        this.bearFace = game.add.sprite(game.world.centerX, game.world.height - 100, 'bearFace');
        this.bearFace.anchor.set(.5,.5);
    },

    update: function(){

    }
}