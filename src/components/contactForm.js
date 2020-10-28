import React, { Component } from 'react';
import Mailchimp from 'react-mailchimp-form'

class Form extends Component {
    render() {
    return (
        <Mailchimp
        action='https://epperlytravel.us20.list-manage.com/subscribe/post?u=e26cda73ffe7fbff28626a123&amp;id=b9ca6ffc83'
        fields={[
            {
                name: 'name',
                placeholder: "What's your name?",
                type: 'text',
                required: false
            },
            {
                name: 'EMAIL',
                placeholder: 'Email',
                type: 'email',
                required: true
            },
            {
                name: 'MSG',
                placeholder: 'How can Alex help you?',
                type: 'textarea',
                required: true
            }
            ]}
        className='form'
        />
    );
    }
}

export default Form;