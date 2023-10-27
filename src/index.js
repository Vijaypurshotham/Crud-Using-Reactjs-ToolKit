import React from 'react'
import {createRoot} from 'react-dom'
import App from './App'
import './App.css'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux' 

import usersReducer from './Features/Users'

const store = configureStore({
  reducer : {
    users: usersReducer,
    
  }
}
)
createRoot(document.getElementById('root')).render(
<Provider store={store}>
<App/>
</Provider>

)
