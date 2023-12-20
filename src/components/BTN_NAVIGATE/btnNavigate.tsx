import React, { useEffect, useState } from 'react'
import { ArrowDownward } from '@mui/icons-material'
import { Fab, Grow } from '@mui/material'

const BtnNavigate = () => {
    const [checked, setChecked] = useState(false);

    const handleWindowScroll = (e) => {
        console.log(e.clientY);
        const newY = window.scrollY + e.clientY + 100; // Ajusta según sea necesario
        window.scrollTo({
            top: newY,
            behavior: 'smooth', // Agrega 'smooth' para un desplazamiento suave
        });
    };

    useEffect(() => {
        setTimeout(() => {
            setChecked(true);
        }, 3000);
    }, []);
    return (
        <div className="fab-container">
            <Grow in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 1000 } : {})}>
                <Fab variant="extended" onClick={(e) => handleWindowScroll(e)}>
                    <ArrowDownward sx={{ mr: 1 }} />
                    Navigate
                </Fab>

            </Grow>

        </div>
    )
}

export default BtnNavigate
