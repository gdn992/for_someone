import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { HeaderToolbar, navItems } from './HeaderToolbar'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Persons from './Persons'
import Games from './Games'

const drawerWidth = 240

export const MainMenuContent = () => {
  const { t } = useTranslation()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    console.log(
      '%c MainMenuContent.tsx: ',
      'background-image: linear-gradient(red 33.33%, yellow 33.33%, yellow 66.66%, green 66.66%); padding:20px; color: black; font-size:20px',
    )
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {t('uglyDesign')}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const handleNavigation = () => {}

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <HeaderToolbar onNavigation={handleNavigation} />
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path={'/persons'} element={<Persons />}>
            <Route path=":id" element={<>personsWithId</>} />
          </Route>
          <Route path={'/games'} element={<Games />} />
          <Route path={'/'}>
            <Route path={'/about'} element={<About />}></Route>
          </Route>
        </Routes>
      </Box>
    </Box>
  )
}
