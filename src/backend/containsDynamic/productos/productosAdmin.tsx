import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import React from 'react'
import Button from '@mui/material/Button';
import TableProductosAdmin from './tableProductosAdmin';
import TextField from '@mui/material/TextField';

const ProductosAdmin = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField id="outlined-search" label="Buscar producto" type="search"  sx={{width:'100%'}}/>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained">Buscar producto</Button>
          </Grid>
          <Grid item xs={12}>
            <TableProductosAdmin />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default ProductosAdmin
