import React from 'react';
import Accordion from './components/Accordion'

const items = [
    {
        title: 'What is react',
        content: 'React'
    },
    {
        title: 'Why use React',
        content: 'favorite'
    },
    {
        title: 'How use react',
        content: 'you use react by reading components'
    }
]

export default () => {
    return <Accordion items={items}/>
};

