import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './../redux/store';
import StatusModal from '../components/StatusModal/StatusModal';

export default {
    title: 'Example/StatusModal',
    component: StatusModal,
} as ComponentMeta<typeof StatusModal>;

const Template: ComponentStory<typeof StatusModal> = (args) => {
    return (
        <Provider store={store}>
            <Router>
                <StatusModal {...args} />;
            </Router>
        </Provider>
    )
}

export const Error = Template.bind({});
Error.args = {
    open: true,
    setOpen: () => {},
    status: 'Please enter a name!'
};

export const Ok = Template.bind({});
Ok.args = {
    open: true,
    setOpen: () => {},
    status: 'Welcome User123!'
};
