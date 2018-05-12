import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SideMenu.scss';
import { ChevronDown } from 'js/components/icon/ChevronDown';
import cn from 'classnames';

export default class SideMenu extends React.Component {
	static defaultProps = {
		title: 'Menu 1',
		menu: [
			{
				title: 'Level 2 Navigation',
				link: '/',
				menu: [{ title: 'Level 3 Navigation', link: '/' }]
			},
			{
				title: 'Level 2 Navigation',
				link: '/'
			},
			{
				title: 'Level 2 Navigation',
				link: '/'
			},
			{
				title: 'Level 2 Navigation',
				link: '/'
			}
		]
	};

	static propTypes = {
		title: PropTypes.string,
		menu: PropTypes.array
	};

	state = {
		open: false
	};

	onClick = e => {
		e.preventDefault();
		this.setState(({ open }) => ({ open: !open }));
	};

	render() {
		const { title, menu } = this.props;
		return (
			<nav className={'side-menu'}>
				<button className={'title-wrap'} onClick={this.onClick}>
					<h2 className={'title'}>{title}</h2>
					<div className={'icon-wrap'}>
						<ChevronDown className={'down-icon'} />
					</div>
				</button>
				{this.renderMenu(menu)}
			</nav>
		);
	}

	renderMenu(menu, key) {
		const { open } = this.state;
		return (
			<ul key={key + '-menu'} className={cn({ 'nav-wrapper': !key, open })}>
				{menu.map((item, i) => {
					if (!item.menu) {
						return this.renderItem(item, i);
					} else {
						return this.renderItem(item, i, this.renderMenu(item.menu));
					}
				})}
			</ul>
		);
	}

	renderItem({ link, title }, key, children) {
		return (
			<li key={key}>
				<Link to={link}>{title}</Link>
				{children}
			</li>
		);
	}
}
