import React from 'react'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { logoutUser, useUserRole } from '../../services/defaultValues'
import { useNavigate } from 'react-router-dom'

const OpcionesAdmin = ({ handleClose }) => {

    const { setUserRole } = useUserRole();

    const navigate = useNavigate();

    const onLogout = () => {
        logoutUser();
        setUserRole();
        handleClose();
    }
    const handleNavigationClick = (option) => {
        console.log(`Selected navigation option: ${option}`);
        navigate(option);
        handleClose();

        // Aquí puedes manejar la navegación a las diferentes opciones.
    };
    return (
        <div>
            <List>
                <ListItemButton onClick={() => handleNavigationClick('/dashboard')}>
                    <ListItemText primary="Admin panel" />
                </ListItemButton>
                {/* <ListItemButton onClick={() => handleNavigationClick('Perfil')}>
                    <ListItemText primary="Perfil" />
                </ListItemButton> */}
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

export default OpcionesAdmin
