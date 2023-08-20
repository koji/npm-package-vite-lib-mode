import React from 'react'
import ReactDOM from 'react-dom/client'

import { MySampleLibrary } from '../../src'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MySampleLibrary message='hello world' />
  </React.StrictMode>
)
