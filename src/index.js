import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function currentDate () {
//     const element = (
//         <div>
//             <h1>Render a single element</h1>
//             <h2> With Date and time  {new Date(). toLocaleDateString() }, {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element, document.getElementById('root')
//     );
// }
// setInterval(currentDate, 1000)

const dateElement = (
    <div>
        <h1>Render a single element</h1>
        <h2> With Date and time {new Date().toLocaleDateString()}, {new Date().toLocaleTimeString()}</h2>
    </div>
)

ReactDOM.render(
    <React.StrictMode>
        <App/>
        {dateElement}
    </React.StrictMode>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
