import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <HomeIcon />
          <Typography
            component='a'
            href='/'
            sx={{
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            홈
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
