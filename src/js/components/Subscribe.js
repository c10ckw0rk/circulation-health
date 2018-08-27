import React from 'react';
import PropTypes from 'prop-types';
import Container from 'js/components/grid/Container';
import TypedInput from 'js/components/inputs/TypedInput';
import Button from 'js/components/inputs/Button';
import axios from 'axios';

import './Subscribe.scss';

const formPath = '/wp-json/contact-form-7/v1/contact-forms/87/feedback';
const success = 'mail_sent';

export default class Subscribe extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        buttonText: PropTypes.string,
        subscribePlaceholder: PropTypes.string
    };

    state = {
        email: '',
        submitted: false,
        message: ''
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSuccess = message => {
        this.setState({
            submitted: true,
            message
        });
    };

    onError = () => {};

    successResponse = ({ data: { status, message } }) => {
        if (status === success) this.onSuccess(message);
        else this.onError();
    };

    onSubmit = e => {
        e.preventDefault();

        const data = new FormData();
        data.set('your-email', this.state.email);

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
        const { title, buttonText, subscribePlaceholder } = this.props;
        const { message, submitted } = this.state;

        return (
            <Container padding={false} col={true} className={'subscribe'}>
                <h2>{title}</h2>
                {!submitted && (
                    <form onSubmit={this.onSubmit} className={'form'}>
                        {subscribePlaceholder && (
                            <TypedInput
                                onChange={this.onChange}
                                placeholder={subscribePlaceholder}
                                id={'email'}
                                label={'email-address'}
                                type={'email'}
                                required
                                className={'text-input'}
                            />
                        )}
                        {buttonText && (
                            <Button type={'submit'} className={'button'}>
                                {buttonText}
                            </Button>
                        )}
                    </form>
                )}
                {submitted && <p className={'h3'}>{message}</p>}
            </Container>
        );
    }
}
