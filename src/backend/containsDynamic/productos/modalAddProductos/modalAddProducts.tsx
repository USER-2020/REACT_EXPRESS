import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import React from 'react'

const ModalAddProducts = ({ handleClose, valueModalVisible }) => {
    return (
        <Fade in={valueModalVisible}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 920,
                    bgcolor: 'background.paper',
                    border: 'none',
                    borderRadius: 8,
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Ingresa aqui tu producto
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Contenido del modal. Puedes poner lo que quieras aquí.
                </Typography>
                <Button onClick={handleClose} sx={{ mt: 2 }}>
                    Cerrar modal
                </Button>
            </Box>
        </Fade>
    )
}

export default ModalAddProducts
