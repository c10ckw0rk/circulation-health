import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'js/util/Grid';
import cn from 'classnames';
import withMap from 'js/hoc/withMap';

import './Map.scss';

class Map extends React.Component {
	grid;
	map;
	map2;
	mapElement = React.createRef();
	mapElement2 = React.createRef();
	state = {
		size: this.props.size
	};

	static defaultProps = {
		zoom: 15,
		style: { width: '100%', height: 200 },
		map: {
			lat: 0,
			lng: 0
		},
		map2: {
			lat: 0,
			lng: 0
		}
	};

	static propTypes = {
		coords: PropTypes.object,
		key: PropTypes.string,
		zoom: PropTypes.number
	};

	largeMap = () => {
		this.setState({ style: { width: '100%', height: 400 }, zoom: 15 });
		google.maps.event.trigger(this.map, 'resize');
		google.maps.event.trigger(this.map2, 'resize');
	};

	componentDidMount() {
		const { zoom, style, map, map2 } = this.props;

		const center = {
			lat: Number(map.lat),
			lng: Number(map.lng)
		};

		const center2 = {
			lat: Number(map2.lat),
			lng: Number(map2.lng)
		};

		this.map = new google.maps.Map(this.mapElement.current, {
			disableDefaultUI: true,
			center,
			zoom
		});

		this.map2 = new google.maps.Map(this.mapElement2.current, {
			disableDefaultUI: true,
			center: center2,
			zoom
		});

		new google.maps.Marker({
			position: center,
			map: this.map
		});

		new google.maps.Marker({
			position: center2,
			map: this.map2
		});

		this.setState({ style });

		this.grid = new Grid();

		this.grid.register('xs', 'on', () => {
			this.setState({ style: { width: '50%', height: 200 } });
			google.maps.event.trigger(this.map, 'resize');
			google.maps.event.trigger(this.map2, 'resize');
		});
		this.grid.register('sm', 'on', () => {
			this.setState({ style: { width: '50%', height: 296 } });
			google.maps.event.trigger(this.map, 'resize');
			google.maps.event.trigger(this.map2, 'resize');
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
		const { className } = this.props;
		const { style } = this.state;

		return (
			<div className={cn('map', className)}>
				<div className={'block-interaction'} />
				<div className={'map-element'} style={style} ref={this.mapElement} />
				<div className={'map-element'} style={style} ref={this.mapElement2} />
			</div>
		);
	}
}

export default withMap(Map);
