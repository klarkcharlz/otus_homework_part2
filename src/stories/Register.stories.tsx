import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './../redux/store';
import Register from '../components/Register/Register';

export default {
    title: 'Example/Register',
    component: Register,
} as ComponentMeta<typeof Register>;

const Template: ComponentStory<typeof Register> = (args) => {
    return (
        <Provider store={store}>
            <Router>
                <Register {...args} />;
            </Router>
        </Provider>
    )
}

export const Default = Template.bind({});
Default.args = {
    saveData: () => {
    },
    setRunGame: () => {
    }
};
