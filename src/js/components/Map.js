import React from 'react';
import PropTypes from 'prop-types';

export default class Map extends React.Component {
	static defaultProps = {
		coords: '40.714728,-73.998672',
		key: 'AIzaSyCeyiWxUHdOzxmEQGLBdI2BMYQAY7M0liw',
		size: '320x320',
		zoom: 12,
		style: {
			width: '100%'
		}
	};

	static propTypes = {
		coords: PropTypes.string,
		size: PropTypes.string,
		key: PropTypes.string,
		zoom: PropTypes.number
	};

	render() {
		const { coords, size, key, zoom, style, ...rest } = this.props;
		return (
			<img
				src={`https://maps.googleapis.com/maps/api/staticmap?center=${coords}&key=${key}&size=${size}&zoom=${zoom}`}
				style={style}
				{...rest}
			/>
		);
	}
}
