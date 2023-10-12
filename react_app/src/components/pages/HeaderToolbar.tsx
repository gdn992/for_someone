import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export type Navigation = 'persons' | 'games' | 'about'

export const navItems: Navigation[] = ['persons', 'games', 'about']

export const HeaderToolbar: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          MUI
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((navItem) => (
            <Button
              key={navItem}
              sx={{ color: '#fff' }}
              onClick={() => {
                navigate(navItem)
              }}
            >
              {t('uglyDesign')}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
