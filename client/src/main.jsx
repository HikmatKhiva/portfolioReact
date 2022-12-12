import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContextProvider } from './context/themeContext'
import './index.css'
import Loading from './components/Loading/Loading';
import { UserInfoContextProvider } from './context/UserInfo';
const LazyApp = React.lazy(() => import('./App'));


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ThemeContextProvider>
    <UserInfoContextProvider>
      <React.Suspense fallback={<Loading />}>
        <LazyApp />
      </React.Suspense>
    </UserInfoContextProvider>
  </ThemeContextProvider>
  // </React.StrictMode>
)
