import React from 'react';
import * as PropTypes from 'prop-types';
import './ProfileTile.scss';
import { themedir } from 'js/config';

export default class ProfileTile extends React.Component {
	static defaultProps = {
		profileImage: themedir + '/img/dr-bullen.jpg',
		content: `<h2 class='h4'>About</h2>
				<h3>Dr Andrew Bullen<br> FRACS MBBS BSc(Med)</h3>
				<p>
					Dr Andrew Bullen is an Endovascular and Vascular surgeon in the Illawarra region with appointments at The
					Wollongong Public and Private Hospitals as well as providing specialist vascular services and procedures at
					the newly created Ulladulla day surgery.
				</p>
				<p>
					<a href="#">Learn More</a>
				</p>`
	};

	static propTypes = {
		profileImage: PropTypes.string,
		content: PropTypes.string
	};

	render() {
		const { profileImage, content } = this.props;

		return (
			<div className={'profile-tile'}>
				<div className={'profile'}>
					<img className={'image'} src={profileImage} />
				</div>
				<div className={'container-fluid'}>
					<div className={'row'}>
						<div className={'col-xs-12'} dangerouslySetInnerHTML={{ __html: content }} />
					</div>
				</div>
			</div>
		);
	}
}
