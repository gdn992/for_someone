import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import React from 'react'
import { QueryClientProvider } from 'react-query'
import { QueryClient } from 'react-query'
import { Route, Routes } from 'react-router-dom'

import About from './views/About'
import Games from './views/Games'
import { HeaderToolbar } from './views/HeaderToolbar'
import Persons from './views/PersonsView/Persons'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <HeaderToolbar />
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path={'/persons'} element={<Persons />}>
              <Route path=":id" element={<>personsWithId</>} />
            </Route>
            <Route path={'/games'} element={<Games />} />
            <Route path={'/about'} element={<About />} />
          </Routes>
        </Box>
      </Box>
    </QueryClientProvider>
  )
}

export default App
