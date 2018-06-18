import React from 'react';
import PropTypes from 'prop-types';
import Hamburger from 'js/components/icon/Hamburger';
import Logo from 'js/components/svg/Logo';
import { NavLink } from 'react-router-dom';

export default class MobileHeader extends React.Component {
	static defaultProps = {
		showMobileMenu: () => {},
		title: ['', '']
	};

	static propTypes = {
		showMobileMenu: PropTypes.func,
		title: PropTypes.array
	};

	showMobileMenu = () => {
		this.props.showMobileMenu(true);
	};

	render() {
		const { title, className } = this.props;
		return (
			<div className={className}>
				<h1 className={'title'}>
					<NavLink to={'/'}>
						<Logo className={'logo'} />
					</NavLink>
					<div className={'text-wrapper'}>
						<span className={'title-section-1 h4'}>{title[0]}</span>
						<span className={'title-section-2'}>{title[1]}</span>
					</div>
				</h1>
				<button className={'menu'} onClick={this.showMobileMenu}>
					<Hamburger />
				</button>
			</div>
		);
	}
}
