import React from 'react';
import PropTypes from 'prop-types';
import Container from 'js/components/grid/Container';

import './ContactUs.scss';

export default class ContactUs extends React.Component {
	static defaultProps = {
		title: '',
		types: []
	};

	static propTypes = {
		title: PropTypes.string,
		types: PropTypes.arrayOf(PropTypes.object)
	};

	render() {
		const { title, types } = this.props;

		return (
			<Container className={'contact-us'}>
				<h2>{title}</h2>
				<ul className={'list'}>
					{types &&
						types.map(({ type, label, detail }, i) => {
							return (
								<li key={i} className={'item'}>
									{label}:{' '}
									<a className={'link'} href={`${type}:${detail}`}>
										{detail}
									</a>
								</li>
							);
						})}
				</ul>
			</Container>
		);
	}
}
