import {lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
//import {Provider} from 'react-redux'
import './index.css'
import {Toaster} from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
//import Store from './Store/index';
const App = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    
    <Suspense>
        <App />
        <Toaster 
          toastOptions={{
            position: 'top-right',
            style: {
              background: '#283046',
              color: 'white'
            }
          }}
        />
      </Suspense>
    
  </BrowserRouter>
);
