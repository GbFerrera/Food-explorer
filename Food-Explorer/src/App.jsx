import React from 'react'
import ReactDOM from 'react-dom/client'

import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from "./styles/global"



import { NewFood } from './pages/admin_user/new_food'
import { Home } from './pages/common_user/Home'
import {Menu} from './pages/common_user/Menu'
import { MenuAdmin } from './pages/admin_user/menu'
import { SingIn } from './pages/login/Sing-In'
import { SingUp } from './pages/login/Sing-Up'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    
    <ThemeProvider theme={theme}>

      <GlobalStyle/>

      
       <Home/>
       

       
       
    </ThemeProvider>

  </React.StrictMode>,
)
