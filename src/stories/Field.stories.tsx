import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Field from '../components/Field/Field';
import {Provider} from 'react-redux';
import {store} from './../redux/store';

export default {
    title: 'Example/Field',
    component: Field,
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => {
    return (
        <Provider store={store}>
            <Router>
                <Field {...args} />
            </Router>
        </Provider>
    )
}

export const Default = Template.bind({});
Default.args = {
    runGame: true,
    setRunGame: () => {
    },
    logOut: () => {
    },
};
