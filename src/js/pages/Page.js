import React from 'react';
import Header from 'js/components/Header';
import Banner from 'js/components/Banner';
import Container from 'js/components/grid/Container';
import Footer from 'js/components/Footer';
import './Page.scss';
import SideMenu from 'js/components/SideMenu';
import cn from 'classnames';

export default class Page extends React.Component {
	state = {
		page: {
			title: {
				rendered: ''
			},
			excerpt: {
				rendered: ''
			}
		},
		sizes: {
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
		}
	};

	render() {
		const { title, content } = this.props;
		const { sizes, menu } = this.state;
		const leftClasses = Object.keys(sizes).map(size => `col-${size}-${sizes[size].left}`);
		const rightClasses = Object.keys(sizes).map(size => `col-${size}-${sizes[size].right}`);

		return (
			<>
				<Header />
				<Banner short titleContent={title.rendered} />
				<main className={'page'}>
					<Container>
						<div className={'container-fluid page-content'}>
							<div className={'row'}>
								{menu && (
									<div className={cn(leftClasses, 'navigation')}>
										<SideMenu title={title.rendered} menu={menu} />
									</div>
								)}
								<div className={cn(rightClasses, 'content')} dangerouslySetInnerHTML={{ __html: content.rendered }} />
							</div>
						</div>
					</Container>
				</main>
				<Footer />
			</>
		);
	}
}
