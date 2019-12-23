import React from 'react';
import ReactDOM from 'react-dom';
import BookType from './bookType';



//test case
it('renders without crashing', () => {
    const div = document.createElement('div'); //first create a DOM element to render the component into
    ReactDOM.render(<BookType />, div); //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.unmountComponentAtNode(div); //clean up
})