import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'js/util/Grid';
import './Map.scss';

export default class Map extends React.Component {
	grid;
	map;
	mapElement = React.createRef();
	state = {
		size: this.props.size
	};

	static defaultProps = {
		center: {
			lat: 40.714728,
			lng: -73.998672
		},
		zoom: 12,
		style: { width: '100%', height: 200 }
	};

	static propTypes = {
		coords: PropTypes.object,
		key: PropTypes.string,
		zoom: PropTypes.number
	};

	largeMap = () => {
		this.setState({ style: { width: '100%', height: 600 }, zoom: 12 });
		google.maps.event.trigger(this.map, 'resize');
	};

	componentDidMount() {
		const { center, zoom, style } = this.props;
		this.map = new google.maps.Map(this.mapElement.current, {
			disableDefaultUI: true,
			center,
			zoom
		});

		this.setState({ style });

		this.grid = new Grid();

		this.grid.register('xs', 'on', () => {
			this.setState({ style: { width: '100%', height: 200 } });
			google.maps.event.trigger(this.map, 'resize');
		});
		this.grid.register('sm', 'on', () => {
			this.setState({ style: { width: '100%', height: 296 } });
			google.maps.event.trigger(this.map, 'resize');
		});
		this.grid.register('md', 'on', this.largeMap);
		this.grid.register('lg', 'on', this.largeMap);
		this.grid.register('xl', 'on', this.largeMap);

		this.grid.exec();
	}

	componentWillUnmount() {
		this.grid.destroy();
		this.grid = undefined;
	}

	render() {
		const { style } = this.state;

		return (
			<div className={'map'}>
				<div className={'block-interaction'} />
				<div style={style} ref={this.mapElement} />
			</div>
		);
	}
}
