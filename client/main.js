import React from 'react'
import immutable from 'immutable'
import installDevTools from 'immutable-devtools'
import {render} from 'react-dom'
import 'font-awesome-webpack'

import App from './components/App'
import './main.less'

// enable Immutable JS Chrome Extension debugger
installDevTools(immutable)

render(
    <App/>,
    document.getElementById('app-container'),
)
