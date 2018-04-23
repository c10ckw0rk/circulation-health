import React from 'react';
import { withConsumer } from 'js/store/Store';
import Logo from 'js/components/svg/Logo';
import { Hamburger } from 'js/components/icon/Hamburger';
import './Header.scss';

class Header extends React.Component {
	state = {
		title: ''
	};

	componentWillReceiveProps(nextProps, nextContent) {
		if (nextProps !== this.props && nextProps.home.length > 0) {
			const title = nextProps.home[0].title.rendered.split(' ');
			this.setState({ title });
		}
	}

	render() {
		const { title } = this.state;
		return (
			<header className={'header container-fluid'}>
				<div className={'row inner-header'}>
					<h1 className={'title col-xs-12'}>
						<Logo className={'logo'} />
						<div className={'text-wrapper'}>
							<span className={'title-section-1 h4'}>{title[0]}</span>
							<span className={'title-section-2'}>{title[1]}</span>
						</div>
					</h1>
					<button className={'menu'}>
						<Hamburger />
					</button>
				</div>
			</header>
		);
	}
}

export default withConsumer()(Header);
