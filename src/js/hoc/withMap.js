import React from 'react';
import { withConsumer } from 'js/store/Store';

const withMap = Component =>
	withConsumer(
		class extends React.Component {
			render() {
				const { globalOptions } = this.props;
				console.log(this.props.globalOptions);
				if (!globalOptions) return false;
				return (
					<Component
						{...this.props}
						map={this.props.globalOptions.googleMapsAddress}
						map2={this.props.globalOptions.googleMapsAddress2}
					/>
				);
			}
		}
	);

export default withMap;
