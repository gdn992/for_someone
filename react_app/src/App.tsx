import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './views/About'
import Games from './views/Games'
import { HeaderToolbar } from './views/HeaderToolbar'
import { PersonDetails } from './views/PersonsView/PersonDetails'
import { PersonDetailsForm } from './views/PersonsView/PersonDetailsForm'
import Persons from './views/PersonsView/Persons'

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
            <Route path="'new'" element={<PersonDetailsForm />} />
          </Route>
          <Route path={'/games'} element={<Games />} />
          <Route path={'/about'} element={<About />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App
