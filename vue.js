new Vue({
	el: '#vue-app',
	data: {
		health: 100,
		gameEnd: false,
		winner: 'GAME END!!!! You WINER!!',
		winnerMsg: false,
		numCount: 1
	},
	methods: {
		cresh: function(){
			this.health -= 14.28;
			this.numCount += 1;
			if (this.health <= 0 ){
				this.gameEnd = true;
				this.winnerMsg = true;
				this.numCount = 1;
			}
		},
		reset: function(){
			this.health = 100;
			this.gameEnd = false;
			this.winnerMsg = false;
			this.numCount = 1;
		}
	},
});