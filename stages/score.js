var scoreStage = {
	preload: function() {
		game.add.text("hello world");


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
	},

	create: function() {

	},

	update: function() {

	},

	duration : 4,
    endStage: function() {
    	var nextLevel = globals.stages[game.rnd.integerInRange(0, globals.stages.length-1)];
        game.state.start(nextLevel);
    },
    decreaseTimer: function () {
        this.preloadBar.scale.x -= 1/this.duration/20;
    }
}