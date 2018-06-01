import React from 'react';

class Game extends React.Component {
	
	constructor() {
		console.log(this.x);
	}

	alertText() {
		console.log(this);
	}

	render() {
		return(
			<button onClick={this.alertText}>Click to test</button>
		)
	}

}

export default Game;