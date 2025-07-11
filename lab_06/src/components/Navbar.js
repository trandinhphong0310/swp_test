import { AppBar, Button, Toolbar, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar variant="regular" sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Orchid App
        </Typography>

        <Box>
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/contact")}>Contact</Button>
          <Button color="inherit" onClick={() => navigate("/about")}>About</Button>
          <Button color="inherit" onClick={() => navigate("/create")}>Create Orchids</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
