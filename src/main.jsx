import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/common/Layout/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>,
  </BrowserRouter>
);
