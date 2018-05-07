import React from 'react';
import * as PropTypes from 'prop-types';
import './Banner.scss';
import { themedir } from 'js/config';
import Container from 'js/components/grid/Container';
import ListTile from 'js/components/ListTile';
import Grid from 'js/util/Grid';

export default class Banner extends React.Component {
	static defaultProps = {
		backgroundImage: {
			xs: themedir + '/img/banner.jpg',
			sm: themedir + '/img/banner.jpg',
			md: themedir + '/img/banner.jpg',
			lg: themedir + '/img/banner.jpg',
			xl: themedir + '/img/banner.jpg'
		},
		titleContent: 'Comprehensive diagnosis and treatment of all arterial and venous disorders'
	};

	static propTypes = {
		backgroundImage: PropTypes.object,
		titleContent: PropTypes.string
	};

	grid;
	state = {
		backgroundImage: this.props.backgroundImage.xs
	};

	componentDidMount() {
		const { backgroundImage } = this.props;
		this.grid = new Grid();
		this.grid.register('xs', 'on', () => {
			this.setState({ backgroundImage: backgroundImage.xs });
			console.log('current bp xs');
		});
		this.grid.register('sm', 'on', () => {
			this.setState({ backgroundImage: backgroundImage.sm });
			console.log('current bp sm');
		});
		this.grid.register('md', 'on', () => {
			this.setState({ backgroundImage: backgroundImage.md });
			console.log('current bp md');
		});
		this.grid.register('lg', 'on', () => {
			this.setState({ backgroundImage: backgroundImage.lg });
			console.log('current bp lg');
		});
		this.grid.register('xl', 'on', () => {
			this.setState({ backgroundImage: backgroundImage.xl });
			console.log('current bp xl');
		});
		this.grid.exec();
	}

	componentWillUnmount() {
		this.grid.destroy();
	}

	render() {
		const { titleContent } = this.props;
		const { backgroundImage } = this.state;

		return (
			<section className={'banner'} style={{ backgroundImage: `url(${backgroundImage})` }}>
				<Container>
					<div className={'inner-banner'}>
						<h2 className={'banner-title'}>
							<span className={'inner-content'}>{titleContent}</span>
						</h2>
						<div className={'list-tile-wrapper'}>
							<ListTile className={'banner-links'} />
						</div>
					</div>
				</Container>
			</section>
		);
	}
}
