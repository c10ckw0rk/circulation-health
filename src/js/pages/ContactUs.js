import React from 'react';
import Header from 'js/components/Header';
import Footer from 'js/components/Footer';
import './ContactUs.scss';
import Container from 'js/components/grid/Container';
import Map from 'js/components/Map';
import TypedInput from 'js/components/inputs/TypedInput';
import PropTypes from 'prop-types';
import SubmitButton from 'js/components/SubmitButton';

export default class ContactUs extends React.Component {
	static defaultProps = {
		title: 'Contact us',
		buttonLabel: 'Submit enquiry',
		types: [
			{
				type: 'tel',
				label: 'Phone',
				detail: '(02) 42 268 930'
			},
			{
				type: 'tel',
				label: 'Fax',
				detail: '(02) 42 268 930'
			},
			{
				type: 'mailto',
				label: 'Email',
				detail: 'info@circulationhealth.com.au'
			}
		]
	};

	static propTypes = {
		title: PropTypes.object,
		buttonLabel: PropTypes.string,
		types: PropTypes.array
	};

	onSubmit = () => {};

	render() {
		const { title, types, buttonLabel } = this.props;
		return (
			<>
				<Header />
				<Map className={'contact-us-map'} />
				<main className={'contact-us-page-wrapper'}>
					<Container col={false} className={'contact-us-page'}>
						<div className={'contact-us-inner-wrapper'}>
							<h2 className={'col-xs-12 title'}>{title.rendered}</h2>
							<div className={'col-xs-12 col-sm-12 col-md-4'}>
								<p>
									We want to hear from you. Please send us an enquiry with the following form and we will get back to
									you as soon as we can. Alternatively, you can contact us
								</p>
								<ul className={'list'}>
									{types.map(({ type, label, detail }, i) => {
										return (
											<li key={i} className={'item'}>
												{label}:{' '}
												<a className={'link'} href={`${type}:${detail}`}>
													{detail}
												</a>
											</li>
										);
									})}
								</ul>
							</div>
							<form className={'col-xs-12 col-sm-12 col-md-8'} onSubmit={this.onSubmit}>
								<Container col={false}>
									<div className={'col-xs-12 col-sm-12 col-md-6'}>
										<TypedInput
											placeholder={'First name'}
											autoFocus
											id={'email'}
											label={'email-address'}
											type={'text'}
											className={'text-input'}
										/>
										<TypedInput
											placeholder={'Email'}
											id={'email'}
											label={'email-address'}
											type={'text'}
											className={'text-input'}
										/>
									</div>
									<div className={'col-xs-12 col-sm-12 col-md-6'}>
										<TypedInput
											placeholder={'Last name'}
											id={'email'}
											label={'email-address'}
											type={'text'}
											className={'text-input'}
										/>
										<TypedInput
											placeholder={'Phone'}
											id={'email'}
											label={'email-address'}
											type={'text'}
											className={'text-input'}
										/>
									</div>
									<div className={'col-xs-12 col-sm-12 col-md-12'}>
										<TypedInput
											big
											placeholder={'Message'}
											id={'email'}
											label={'email-address'}
											type={'text'}
											className={'text-area'}
										/>
										<div className={'submit-wrapper'}>
											<SubmitButton />
										</div>
									</div>
								</Container>
							</form>
						</div>
					</Container>
				</main>
				<Footer />
			</>
		);
	}
}
