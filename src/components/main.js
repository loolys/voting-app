import React from 'react';

export default class Main extends React.Component {
	render() {
		return (
			<div className="hello-world">
				Hello World.

				<div className="app-container">{this.props.children}</div>
			</div>
		);
	}
}
