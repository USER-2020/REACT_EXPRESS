import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import { logoutUser } from '../../services/defaultValues'

const OpcionesUsuario = ({ handleClose }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onLogout = () => {
    logoutUser();
    handleClose();
  }

  const handleNavigationClick = (option) => {
    console.log(`Selected navigation option: ${option}`);
    handleClose();
    // Aquí puedes manejar la navegación a las diferentes opciones.
  };


  return (
    <div>
      <List>
        <ListItemButton onClick={() => handleNavigationClick('Inicio')}>
          <ListItemText primary="Inicio" />
        </ListItemButton>
        <ListItemButton onClick={() => handleNavigationClick('Perfil')}>
          <ListItemText primary="Perfil" />
        </ListItemButton>
        {/* Agrega más opciones de navegación según sea necesario */}
      </List>
      <MenuItem>
        <Button variant="contained" color="secondary" fullWidth onClick={onLogout}>
          Cerrar sesión
        </Button>
      </MenuItem>
    </div>
  )
}

export default OpcionesUsuario
