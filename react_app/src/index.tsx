import './index.css'

import { createTheme, ThemeProvider } from '@mui/material'
import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import reportWebVitals from './reportWebVitals'

axios.defaults.baseURL = 'http://localhost:8080/api/'
axios.defaults.headers.common['Content-Type'] = 'application/json'

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>{' '}
  </QueryClientProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
