import React from 'react'
import ReactDOM from 'react-dom/client'

import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from "./styles/global"



import {Input} from "./components/input"
import {Menu} from "./pages/common_user/menu"
import { SingIn } from './pages/login/Sing-In'
import { Home } from './pages/common_user/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    
    <ThemeProvider theme={theme}>

      <GlobalStyle/>

      
       <Home/>
       

       
       
    </ThemeProvider>

  </React.StrictMode>,
)
