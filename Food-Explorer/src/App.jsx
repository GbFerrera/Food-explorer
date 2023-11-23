import React from 'react'
import ReactDOM from 'react-dom/client'

import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from "./styles/global"



import {Home } from "./pages/common_user/Home"
import { FormFood } from './components/Form-Food'
import { NewFood } from './pages/admin_user/new_food'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    
    <ThemeProvider theme={theme}>

      <GlobalStyle/>

      
       <NewFood/>
       

       
       
    </ThemeProvider>

  </React.StrictMode>,
)
