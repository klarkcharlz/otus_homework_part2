import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './../redux/store';
import Greetings from '../components/Greetings/Greetings';
import {setState} from './../redux/actions';

store.dispatch(setState(
    {
        name: 'Mike',
        cells: 10
    }
))

export default {
    title: 'Example/Greetings',
    component: Greetings,
} as ComponentMeta<typeof Greetings>;

const Template: ComponentStory<typeof Greetings> = (args) => {
    return (
        <Provider store={store}>
            <Router>
                <Greetings/>
            </Router>
        </Provider>
    )
}

export const Mike = Template.bind({});
