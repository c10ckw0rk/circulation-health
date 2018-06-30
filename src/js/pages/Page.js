import React from 'react';
import Banner from 'js/components/Banner';
import Container from 'js/components/grid/Container';
import PropTypes from 'prop-types';
import './Page.scss';
import SideMenu from 'js/components/SideMenu';
import cn from 'classnames';

const sizes = {
	xs: {
		left: 12,
		right: 12
	},
	sm: {
		left: 3,
		right: 9
	},
	md: {
		left: 3,
		right: 9
	},
	lg: {
		left: 3,
		right: 9
	},
	xl: {
		left: 3,
		right: 9
	}
};

export default class Page extends React.PureComponent {
	static defaultProps = {
		title: {
			rendered: ''
		},
		content: {
			rendered: ''
		}
	};

	static propTypes = {
		title: PropTypes.object,
		content: PropTypes.object
	};

	render() {
		const { title, content, desktopBanner = {}, mobileBanner = {} } = this.props;
		const rightClasses = Object.keys(sizes).map(size => `col-${size}-${sizes[size].right}`);

		return (
			<>
				<Banner
					xs={mobileBanner.url}
					sm={mobileBanner.url}
					md={desktopBanner.url}
					lg={desktopBanner.url}
					xl={desktopBanner.url}
					short
				/>
				<main className={'page'}>
					<Container outerWrap>
						<div className={'container-fluid page-content'}>
							<div className={'row'}>
								<SideMenu title={title.rendered} />

								<div className={cn(rightClasses, 'content')}>
									<h2 className={'page-title'}>
										<span>{title.rendered}</span>
									</h2>
									<div dangerouslySetInnerHTML={{ __html: content.rendered }} />
								</div>
							</div>
						</div>
					</Container>
				</main>
			</>
		);
	}
}
