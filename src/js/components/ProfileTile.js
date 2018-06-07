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
		content: ``
	};

	static propTypes = {
		title: PropTypes.string,
		profileImage: PropTypes.string,
		content: PropTypes.string
	};

	resize = () => {
		const content = this.content.current;
		const img = this.img.current;

		if (!content || !img) {
			setTimeout(this.resize, 100);
			return;
		}

		const style = getComputedStyle(this.img.current);
		let contentHeight = content.offsetHeight;
		const imgHeight = content.offsetHeight;

		contentHeight -= parseInt(style.marginTop.replace('px', ''));

		if (contentHeight > imgHeight && this.state.className === '') {
			this.setState({ className: 'grey-bumper' });
		} else if (contentHeight <= imgHeight && this.state.className !== '') {
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
		const { profileImage, content, title } = this.props;
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
								<div ref={this.content} className={'content'}>
									<h2 className="h4">{title}</h2>
									<div dangerouslySetInnerHTML={{ __html: content }} />
								</div>
							</div>
						</Container>
					</div>
				</div>
				<div className={'padding'} />
			</div>
		);
	}
}
