import React from 'react';
import { withConsumer } from 'js/store/Store';
import Header from 'js/components/Header';
import Banner from 'js/components/Banner';
import CenterTile from 'js/components/CenterTile';
import PanelTile from 'js/components/PanelTile';
import ProfileTile from 'js/components/ProfileTile';
import CalendarTile from 'js/components/CalendarTile';
import CaseStudyTile from 'js/components/CaseStudyTile';
import Map from 'js/components/Map';
import Subscribe from 'js/components/Subscribe';
import Social from 'js/components/Social';
import ContactUs from 'js/components/ContactUs';
import HalfContainer from 'js/components/grid/HalfContainer';
import ThirdsContainer from 'js/components/grid/ThirdsContainer';

import './Home.scss';

class Home extends React.Component {
	state = {
		page: {
			title: {
				rendered: ''
			},
			excerpt: {
				rendered: ''
			}
		}
	};

	render() {
		return (
			<div className={'home'}>
				<Header />
				<Banner />
				<CenterTile />
				<PanelTile />
				<ProfileTile />
				<HalfContainer>
					<CalendarTile />
					<CaseStudyTile />
				</HalfContainer>
				<Map />
				<footer>
					<ThirdsContainer colClass={'footer-cols'}>
						<Subscribe />
						<Social />
						<ContactUs />
					</ThirdsContainer>
				</footer>
			</div>
		);
	}
}

export default withConsumer()(Home);
