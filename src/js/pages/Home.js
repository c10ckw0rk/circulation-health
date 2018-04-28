import React from 'react';
import { withConsumer } from 'js/store/Store';
import Header from 'js/components/Header';
import Banner from 'js/components/Banner';
import ListTile from 'js/components/ListTile';
import CenterTile from 'js/components/CenterTile';
import PanelTile from 'js/components/PanelTile';
import ProfileTile from 'js/components/ProfileTile';
import CalendarTile from 'js/components/CalendarTile';
import CaseStudyTile from 'js/components/CaseStudyTile';
import Map from 'js/components/Map';
import Subscribe from 'js/components/Subscribe';
import Social from 'js/components/Social';
import ContactUs from 'js/components/ContactUs';

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
			<>
				<Header />
				<Banner />
				<ListTile />
				<CenterTile />
				<PanelTile />
				<ProfileTile />
				<CalendarTile />
				<CaseStudyTile />
				<Map />
				<Subscribe />
				<Social />
				<ContactUs />
			</>
		);
	}
}

export default withConsumer()(Home);
