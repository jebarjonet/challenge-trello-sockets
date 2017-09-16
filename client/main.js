import React from 'react'
import immutable from 'immutable'
import installDevTools from 'immutable-devtools'
import {render} from 'react-dom'

import App from './components/App'
import './main.less'

// enable immutable js Chrome Extension debugger
installDevTools(immutable)

render(
    <App/>,
    document.getElementById('app-container'),
)
