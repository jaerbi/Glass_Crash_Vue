new Vue({
	el: '#vue-app',
	data: {
		health: 100,
		gameEnd: false,
		winner: 'GAME END!!!! You WINER!!',
		winnerMsg: false,
		crash_img_num: [1,2,3,4,5,6,7]
	},
	methods: {
		cresh: function(){
			this.health -= 14;
			if (this.health <= 0 ){
				this.gameEnd = true;
				this.winnerMsg = true;
			}
		},
		reset: function(){
			this.health = 100;
			this.gameEnd = false;
			this.winnerMsg = false;
		}
	},
});