var scoreStage = {
    preload: function () {
        // duration bar
        /*this.preloadBar = game.add.graphics(0, 3);
        this.preloadBar.lineStyle(3, 0xaa3300, 1);
        this.preloadBar.moveTo(0, 0);
        this.preloadBar.lineTo(game.width, 0);
        this.preloadBar.scale.x = 1;
         this.preloadBar.scale.y = 3;*/

        // set the time after which the game ends
        game.time.events.add(Phaser.Timer.SECOND * globals.duration, this.endStage, this);

        // moves duration bar
        // game.time.events.repeat(Phaser.Timer.SECOND / 20, globals.duration * 20, this.decreaseTimer, this);

        game.load.image('background', 'assets/score/background.png')
        game.load.atlas('player', 'assets/score/dance.png', 'assets/score/dance.json');
        game.load.image('playerDie', 'assets/score/die.png');


	},

	create: function() {



        game.add.sprite(0, 0, 'background');
        if(globals.lives >= 1) {
            var player = game.add.sprite(game.world.width / 2 - 100, game.world.height - 200, 'player');
            player.scale.setTo(0.5, 0.5);
            player.anchor.setTo(0.5, 0.5);
            player.animations.add('animate', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20], 15, true);
            player.animations.play('animate');
        } else {
            var die = game.add.sprite(game.world.width / 2 - 100, game.world.height - 200, 'playerDie');
            die.scale.setTo(0.5, 0.5);
            die.anchor.setTo(0.5, 0.5);
        }

        if (globals.lives >= 2) {
            var player = game.add.sprite(game.world.width / 2, game.world.height - 200, 'player');
            player.scale.setTo(0.5, 0.5);
            player.anchor.setTo(0.5, 0.5);
            player.animations.add('animate', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20], 15, true);
            player.animations.play('animate');
        } else {
            var die = game.add.sprite(game.world.width / 2, game.world.height - 200, 'playerDie');
            die.scale.setTo(0.5, 0.5);
            die.anchor.setTo(0.5, 0.5);
        }

        if (globals.lives >= 3) {

            var player = game.add.sprite(game.world.width / 2 + 100, game.world.height - 200, 'player');
            player.scale.setTo(0.5, 0.5);
            player.anchor.setTo(0.5, 0.5);
            player.animations.add('animate', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20], 15, true);
            player.animations.play('animate');
        } else {
            var die = game.add.sprite(game.world.width / 2 + 100, game.world.height - 200, 'playerDie');
            die.scale.setTo(0.5, 0.5);
            die.anchor.setTo(0.5, 0.5);
        }


        var txt = 'your score : ' + globals.score
        scoreText = game.add.text(game.world.width / 2, game.world.height / 2 - 100, txt, {fontsize: 28,fill: 'white'});

        scoreText.anchor.setTo(0.5, 0.5);
	},

	update: function() {

	},
    endStage: function() {
        if(globals.lives > 0) {
            var nextLevel = globals.stages[game.rnd.integerInRange(0, globals.stages.length - 1)];
            game.state.start(nextLevel);
        } else {
            game.state.start('gameoverState');
        }
    },
    decreaseTimer: function () {
        this.preloadBar.scale.x -= 1 / globals.duration / 20;
    }
}