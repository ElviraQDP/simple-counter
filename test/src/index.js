
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card'
import Badge from './badge'
import 'bootstrap/dist/css/bootstrap.css';
import css from './index.css'

function App () {
    return (
        <Card/>
    );
}



ReactDOM.render(<App/>, document.querySelector('#root'));