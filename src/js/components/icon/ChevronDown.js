import React from 'react';

export class ChevronDown extends React.Component {
	render() {
		return (
			<svg {...this.props} viewBox="0 0 13 8">
				<path fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="2" d="M1 1.22l5.371 5.37L11.962 1" />
			</svg>
		);
	}
}
