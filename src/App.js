import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import WrapperRoutes from './routes'

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <WrapperRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
