import React from 'react';
import axios from 'axios';

const formPath = '/wp-json/contact-form-7/v1/contact-forms/86/feedback';
const success = 'mail_sent';

export default function withContactUs(Component) {
	return class extends React.Component {
		state = {
			email: '',
			'first-name': '',
			'last-name': '',
			phone: '',
			submitted: false,
			message: '',
			responseMessage: ''
		};

		onSuccess = responseMessage => {
			this.setState({
				submitted: true,
				responseMessage
			});
		};

		onChange = e => {
			this.setState({ [e.target.id]: e.target.value });
		};

		onError = () => {};

		successResponse = ({ data: { status, message } }) => {
			if (status === success) this.onSuccess(message);
			else this.onError();
		};

		onSubmit = e => {
			e.preventDefault();

			const data = new FormData();
			data.set('email', this.state.email);
			data.set('first-name', this.state['first-name']);
			data.set('last-name', this.state['last-name']);
			data.set('phone', this.state.phone);
			data.set('message', this.state.message);

			axios({
				method: 'post',
				url: formPath,
				data,
				config: { headers: { 'Content-Type': 'multipart/form-data' } }
			})
				.then(this.successResponse)
				.catch(this.onError);
		};

		render() {
			const { submitted, responseMessage } = this.state;
			return (
				<Component
					onSubmit={this.onSubmit}
					onChange={this.onChange}
					onError={this.onError}
					submitted={submitted}
					responseMessage={responseMessage}
					{...this.props}
				/>
			);
		}
	};
}
