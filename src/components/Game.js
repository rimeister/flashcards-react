import React from 'react';

class Game extends React.Component {
	
	constructor() {
		super();
		this.y = 'test';
	}

	createClickHandler: function(){
	    return function() {
	        alert('nice')
	    }.bind(this)
	}

	render() {
		return(
			<button onClick={this.createClickHandler}>Click to test</button>
		)
	}

}

export default Game;