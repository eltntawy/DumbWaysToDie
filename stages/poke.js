var pokeTheBearStage = {
    preload: function(){
        game.load.image('dummy', 'assets/pokeTheBear/dummy.png');
        game.load.image('bearBelly', 'assets/pokeTheBear/bearBelly.png');
        game.load.image('pokeBar', 'assets/pokeTheBear/pokeBar.png');
        game.load.image('pokeSafe', 'assets/pokeTheBear/pokeSafe.png');
        game.load.image('bearFace', 'assets/pokeTheBear/bearFace.png');
    },

    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = "#88bac3";

        this.initialStartX = game.world.centerX;

        this.dummy = game.add.sprite(this.game.world.centerX + 140, game.world.centerY + 20, 'dummy');
        this.dummy.anchor.set(.5,.5);

        this.bearBelly = game.add.sprite(this.game.world.width, 0, 'bearBelly');
        this.bearBelly.anchor.set(1,0);

        this.pokeBar = game.add.sprite(this.initialStartX, game.world.height - 100, 'pokeBar');
        this.pokeBar.anchor.set(.5,.5);

        this.pokeSafe = game.add.sprite(this.initialStartX, game.world.height - 100, 'pokeSafe');
        this.pokeSafe.anchor.set(.5,.5);

        this.bearFace = game.add.sprite(this.initialStartX, game.world.height - 100, 'bearFace');
        this.bearFace.anchor.set(.5,.5);

        game.physics.arcade.enable(this.bearFace);
        game.physics.arcade.enable(this.pokeSafe);

        this.bearFace.body.velocity.x = 300;

        // duration bar
        this.preloadBar = game.add.graphics(0, 3);
        this.preloadBar.lineStyle(3, 0xaa3300, 1);
        this.preloadBar.moveTo(0, 0);
        this.preloadBar.lineTo(game.width, 0);
        this.preloadBar.scale.x = 1;
        this.preloadBar.scale.y = 3;

        // set the time after which the game ends
        game.time.events.add(Phaser.Timer.SECOND * this.duration, this.endStage, this);

        // moves duration bar
        game.time.events.repeat(Phaser.Timer.SECOND / 20, this.duration * 20, this.decreaseTimer, this);

        console.log(this.initialStartX - (this.pokeSafe.width / 2 - 32));
        console.log(this.initialStartX + (this.pokeSafe.width / 2 - 32));
        console.log(this.pokeSafe.getBounds());
        console.log(this.bearFace.getBounds());
    },

    update: function(){
        if (this.bearFace.position.x >= this.initialStartX + (this.pokeBar.width / 2 - 40) && this.bearFace.body.velocity.x > 0)
            this.bearFace.body.velocity.x = this.bearFace.body.velocity.x * -1;
        else if(this.bearFace.position.x <= this.initialStartX - (this.pokeBar.width / 2 - 40) && this.bearFace.body.velocity.x < 0)
            this.bearFace.body.velocity.x = this.bearFace.body.velocity.x * -1;

        if (game.input.activePointer.isDown){

            //if (game.physics.arcade.overlap(this.bearFace, this.pokeSafe))
            //    console.log("got it");

            if(this.pokeSafe.getBounds().containsRect(this.bearFace.getBounds()))
                console.log("got it");
        }
    },

    // time allocated for stage
    duration: 5,

    endStage: function() {
        //game.state.start('scoreStage');
    },

    decreaseTimer: function () {
        this.preloadBar.scale.x -= 1/this.duration/20;
    }
}