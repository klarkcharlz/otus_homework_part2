import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import ControlForm from '../components/ControlForm/ControlForm';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './../redux/store';

export default {
    title: 'Example/ControlForm',
    component: ControlForm,
} as ComponentMeta<typeof ControlForm>;

const Template: ComponentStory<typeof ControlForm> = (args) => {
    return (
        <Provider store={store}>
            <Router>
                <ControlForm {...args} />
            </Router>
        </Provider>
    )
}


export const Default = Template.bind({});
Default.args = {
    setSettings: () => {
    },
    setPlayMode: () => {
    },
    reset: () => {
    },
    logOut: () => {
    },
    speed: 2
};
