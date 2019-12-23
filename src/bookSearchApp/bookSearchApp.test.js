import React from 'react';
import ReactDOM from 'react-dom';
import BookSearchApp from './bookSearchApp';

//test case
it('renders without crashing', () => {
    const div = document.createElement('div'); //first create a DOM element to render the component into
    ReactDOM.render(<BookSearchApp />, div); //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.unmountComponentAtNode(div); //clean up
})