import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import Controller from './screens/Controller';
import FormTab from './FormTab';
import SingleLineGridList from './common/movielist/SingleLineGridList';
import RegistrationForm from './RegistrationForm';
//import LoginRegister from './LoginRegister';
//import BookShow from './screens/bookshow/BookShow'

ReactDOM.render(<Controller />, document.getElementById('root'));
registerServiceWorker();
