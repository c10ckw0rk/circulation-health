import React from 'react';
import PropTypes from 'prop-types';
import './ProfileTile.scss';
import { themedir } from 'js/config';
import Container from 'js/components/grid/Container';
import cn from 'classnames';

export default class ProfileTile extends React.Component {
	content = React.createRef();
	img = React.createRef();
	state = {
		className: ''
	};

	static defaultProps = {
		profileImage: themedir + '/img/dr-bullen.jpg',
		content: `<h2 class="h4">About</h2>
				<h1 class="no-margin">Dr Andrew Bullen</h1>
				<h2>FRACS MBBS BSc(Med)</h2>
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

	resize = () => {
		let content = this.content.current.offsetHeight;
		const img = this.img.current.offsetHeight;
		const style = getComputedStyle(this.img.current);

		if (!content || !img) {
			setTimeout(this.resize, 100);
			return;
		}

		content -= parseInt(style.marginTop.replace('px', ''));

		if (content > img && this.state.className === '') {
			this.setState({ className: 'grey-bumper' });
		} else if (content <= img && this.state.className !== '') {
			this.setState({ className: '' });
		}
	};

	componentDidMount() {
		addEventListener('resize', this.resize);
		setTimeout(this.resize);
	}

	componentWillUnmount() {
		removeEventListener('resize', this.resize);
	}

	render() {
		const { profileImage, content } = this.props;
		const { className } = this.state;
		return (
			<div className={cn('profile-padding-wrap', className)}>
				<div className={'profile-wrap'}>
					<div className={'profile-tile'}>
						<Container>
							<div className={'wrapper'}>
								<div className={'profile'}>
									<img ref={this.img} className={'image'} src={profileImage} />
								</div>
								<div ref={this.content} className={'content'} dangerouslySetInnerHTML={{ __html: content }} />
							</div>
						</Container>
					</div>
				</div>
				<div className={'padding'} />
			</div>
		);
	}
}
