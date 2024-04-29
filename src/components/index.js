export {default as Button} from './Button'
export {default as Header} from './Header/header'
export {default as Footer} from './Footer/footer'
export {default as Content} from './Content/content'
export {default as Lab_list} from './Lab_list/lab_list'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../App'
import store from './Redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
