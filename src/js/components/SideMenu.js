import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SideMenu.scss';

export default class SideMenu extends React.Component {
	static defaultProps = {
		title: 'Menu 1'
	};

	static propTypes = {
		title: PropTypes.string
	};

	render() {
		const { title } = this.props;
		return (
			<nav className={'side-menu'}>
				<h2>{title}</h2>
				<ul>
					<li />
				</ul>
			</nav>
		);
	}
}
