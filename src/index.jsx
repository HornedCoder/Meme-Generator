import {createRoot} from 'react-dom/client'
import Header from './components/Header'
import './index.css'
import Main from './components/Main'

const root = createRoot(document.getElementById("root"))

root.render(
  <>
    <Header />
    <Main />
  </>
)