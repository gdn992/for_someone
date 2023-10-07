import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { HeaderToolbar } from './views/HeaderToolbar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Route, Routes } from 'react-router-dom'
import Persons from './views/Persons'
import Games from './views/Games'
import About from './views/About'

function App() {
  return (
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
  )
}

export default App
