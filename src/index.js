import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogsData = [
    {name: 'Dimich', id: 1},
    {name: 'Sveta', id: 2},
    {name: 'Goga', id: 3}
]

const messageData = [
    {message: 'BlaBla', id: 1},
    {message: 'BlaBla1', id: 2},
    {message: 'BlaBla2', id: 3},
]

const postData = [
    {message: 'Hi, how are you?', likesCount: 10},
    {message: 'It\'s my first post', likesCount: 15},
    {message: 'It\'s my first post', likesCount: 15},
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messageData={messageData} postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
