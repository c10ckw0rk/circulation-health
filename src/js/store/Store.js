import React, { createContext } from 'react';
import * as actions from './actions';

const { Provider, Consumer } = createContext(null);

export default class Store extends React.Component {
	state = {
		pages: [],
		posts: [],
		home: [],
		globalOptions: []
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

export const withConsumer = Component => {
	return props => {
		return (
			<Consumer>
				{({ state, actions }) => {
					return <Component {...props} {...state} {...actions} />;
				}}
			</Consumer>
		);
	};
};
