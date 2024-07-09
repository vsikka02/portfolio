// index.js
import * as ReactDOM from 'react-dom/client'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <>
    {/* 👇 Here's the script */}
    <App/>
  </>,
)