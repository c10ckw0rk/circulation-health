import React from 'react';
import PropTypes from 'prop-types';
import { themedir } from 'js/config';
import Container from 'js/components/grid/Container';
import Grid from 'js/util/Grid';
import cn from 'classnames';

import './Banner.scss';

export default class Banner extends React.Component {
	static defaultProps = {
		xs: themedir + '/img/banner.jpg',
		sm: themedir + '/img/banner.jpg',
		md: themedir + '/img/banner.jpg',
		lg: themedir + '/img/banner.jpg',
		xl: themedir + '/img/banner.jpg',
		titleContent: '',
		short: false
	};

	static propTypes = {
		xs: PropTypes.string,
		sm: PropTypes.string,
		md: PropTypes.string,
		lg: PropTypes.string,
		xl: PropTypes.string,
		backgroundImage: PropTypes.object,
		titleContent: PropTypes.string,
		short: PropTypes.bool
	};

	grid;
	state = {
		backgroundImage: this.props.xs
	};

	componentDidMount() {
		const { xs, sm, md, lg, xl } = this.props;

		this.grid = new Grid();
		this.grid.register('xs', 'on', () => {
			this.setState({ backgroundImage: xs });
		});
		this.grid.register('sm', 'on', () => {
			this.setState({ backgroundImage: sm });
		});
		this.grid.register('md', 'on', () => {
			this.setState({ backgroundImage: md });
		});
		this.grid.register('lg', 'on', () => {
			this.setState({ backgroundImage: lg });
		});
		this.grid.register('xl', 'on', () => {
			this.setState({ backgroundImage: xl });
		});
		this.grid.exec();
	}

	componentWillUnmount() {
		this.grid.destroy();
		this.grid = undefined;
	}

	render() {
		const { titleContent, short, overlap } = this.props;
		const { backgroundImage } = this.state;
		const style = { backgroundImage: `url(${backgroundImage})` };

		return (
			<section className={cn('banner', { short, overlap })} style={!overlap ? style : undefined}>
				{overlap && <div className={'overlap-banner'} style={style} />}
				<Container outerWrap>
					<div className={'inner-banner'}>
						<div className={'banner-title'}>
							<span className={'inner-content'} dangerouslySetInnerHTML={{ __html: `<h2>${titleContent}</h2>` }} />
						</div>

						{this.props.children}
					</div>
				</Container>
			</section>
		);
	}
}
