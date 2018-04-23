import React, { createContext } from 'react';
import * as actions from './actions';

const { Provider, Consumer } = createContext(null);

export default class Store extends React.Component {
	state = {
		pages: [],
		posts: [],
		home: []
	};

	render() {
		const { children } = this.props;
		return (
			<Provider
				value={{
					state: this.state,
					actions: Object.keys(actions).reduce((obj, key) => {
						obj[key] = actions[key].bind(this);
						return obj;
					}, {})
				}}>
				{children}
			</Provider>
		);
	}
}

export function withConsumer() {
	return function(Component) {
		return props => (
			<Consumer>
				{({ state, actions }) => {
					return <Component {...props} {...state} {...actions} />;
				}}
			</Consumer>
		);
	};
}
