import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'

import './index.css'

const rootDOM = document.getElementById('root')

if(!rootDOM) throw 'Root element not found.'

const root = ReactDOM.createRoot(rootDOM)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
