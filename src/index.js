import React from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
    return (<div className="divSpan"><span>Testing DIV SPAN</span></div>)
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

/* ReactDOM.render(
    React.createElement('h2', null, 'Hello React'),
    document.getElementById('root')
); */
