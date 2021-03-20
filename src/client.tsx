import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'react-dom'

import { App } from 'app/App'

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
