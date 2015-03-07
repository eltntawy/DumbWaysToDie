var forkStage = {
    preload: function() {
        game.load.image('fork', 'assets/forkStage/fork.png');
        game.load.image('toaster', 'assets/forkStage/toaster.png');

        game.load.atlasJSONHash('animLosing', 'assets/forkStage/anim.png', 'assets/forkStage/anim.json');
    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.stage.backgroundColor = "#34dbdb";
        this.fork = game.add.sprite(game.world.centerX, game.world.centerY, 'fork');
        this.fork.anchor.set(0.5, 0.5);
        game.physics.arcade.enable(this.fork);
        this.fork.body.collideWorldBounds = false;
        this.fork.body.velocity.y = 100;
        this.fork.inputEnabled = true;
        this.fork.input.enableDrag();

        this.left_toaster = game.add.sprite(-180, 110, 'toaster');
        game.physics.arcade.enable(this.left_toaster);
        this.left_toaster.enableBody = true;
        this.left_toaster.body.collideWorldBounds = false;

        this.right_toaster = game.add.sprite(530, 110, 'toaster');
        game.physics.arcade.enable(this.right_toaster);
        this.right_toaster.enableBody = true;
        this.right_toaster.body.collideWorldBounds = false;

        // duration bar
        this.preloadBar = game.add.graphics(0, 3);
        this.preloadBar.lineStyle(3, 0xaa3300, 1);
        this.preloadBar.moveTo(0, 0);
        this.preloadBar.lineTo(game.width, 0);
        this.preloadBar.scale.x = 1;
        this.preloadBar.scale.y = 3;

        // set the time after which the game ends
        game.time.events.add(Phaser.Timer.SECOND * globals.duration, this.losingAnimation, this);

        // moves duration bar
        game.time.events.repeat(Phaser.Timer.SECOND / 20, globals.duration * 20, this.decreaseTimer, this);
        // added animation of losing here because it doesn't play if added elsewhere
        this.anim = this.add.sprite(0, 0, 'animLosing');
        this.anim.animations.add('animLosing');
        // and hiding it from player
        this.anim.alpha = 0;
    },

    update: function() {
        game.physics.arcade.collide(this.fork, this.left_toaster, this.collisionHandler);
        game.physics.arcade.collide(this.fork, this.right_toaster, this.collisionHandler);

        if (game.physics.arcade.overlap(this.fork, this.right_toaster)) {
            this.endStage();
            this.losingAnimation();
        }

        if (game.physics.arcade.overlap(this.fork, this.left_toaster)) {
            this.endStage();
            this.losingAnimation();
        }

        if (this.fork.body.position.y < -720) {
            console.log("win");
        }
    },

    // time allocated for stage
    duration: 5,

    losingAnimation: function() {
        this.anim.alpha = 1;
        
        this.anim.animations.play('animLosing');
        game.time.events.add(Phaser.Timer.SECOND * 1.7, this.endStage, this);
    },

    endStage: function() {
        game.state.start('scoreStage');
    },

    decreaseTimer: function () {
        this.preloadBar.scale.x -= 1/globals.duration/20;
    }
}