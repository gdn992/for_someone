import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './components/pages/About'
import Games from './components/pages/Games'
import { HeaderToolbar } from './components/pages/HeaderToolbar'
import { PersonDetails } from './components/pages/Persons/PersonDetails'
import { PersonDetailsForm } from './components/pages/Persons/PersonDetailsForm'
import Persons from './components/pages/Persons/Persons'

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <HeaderToolbar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path={'/persons'} element={<Persons />}>
            <Route path=":id" element={<PersonDetails />} />
            <Route path="new" element={<PersonDetailsForm />} />
          </Route>
          <Route path={'/games'} element={<Games />} />
          <Route path={'/about'} element={<About />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App
