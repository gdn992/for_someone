import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import { Route, Routes } from 'react-router-dom'

import About from './components/pages/About'
import Games from './components/pages/Games'
import { HeaderToolbar } from './components/pages/HeaderToolbar'
import Persons from './components/pages/Persons/Persons'
import { PersonDetails } from './components/pages/Persons/details/PersonDetails'
import { PersonDetailsForm } from './components/pages/Persons/details/PersonDetailsForm'
import './i18n/config'

const App = () => (
  <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <HeaderToolbar />
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Routes>
        <Route path={'/persons'} element={<Persons />} />
        <Route path="/persons/:id" element={<PersonDetails />} />
        <Route path="/persons/new" element={<PersonDetailsForm />} />
        <Route path={'/games'} element={<Games />} />
        <Route path={'/about'} element={<About />} />
      </Routes>
    </Box>
  </Box>
)

export default App
