import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import App from '../../layouts/app';

storiesOf('App', module)
    .add('no comments', () => {
        return (
            <App/>
        );
    });