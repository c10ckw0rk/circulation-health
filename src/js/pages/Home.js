import React from 'react';
import Header from 'js/components/Header';
import Banner from 'js/components/Banner';
import CenterTile from 'js/components/CenterTile';
import PanelTile from 'js/components/PanelTile';
import ProfileTile from 'js/components/ProfileTile';
import CalendarTile from 'js/components/CalendarTile';
import CaseStudyTile from 'js/components/CaseStudyTile';
import Map from 'js/components/Map';
import ListTile from 'js/components/ListTile';
import HalfContainer from 'js/components/grid/HalfContainer';

import './Home.scss';
import Footer from 'js/components/Footer';

class Home extends React.Component {
	render() {
		return (
			<>
				<Header />
				<Banner>
					<div className={'list-tile-wrapper'}>
						<ListTile className={'banner-links'} />
					</div>
				</Banner>
				<main className={'home'}>
					<CenterTile />
					<PanelTile />
					<ProfileTile />
					<HalfContainer>
						<CalendarTile />
						<CaseStudyTile />
					</HalfContainer>
					<Map />
				</main>
				<Footer />
			</>
		);
	}
}

export default Home;
