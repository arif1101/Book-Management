import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import router from './routes/router.tsx'
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
      <Toaster position='top-center'/>
    </Provider>
  </StrictMode>,
)
