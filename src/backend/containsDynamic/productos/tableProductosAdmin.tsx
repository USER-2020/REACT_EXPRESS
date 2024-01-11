import Paper from '@mui/material/Paper'
import React, { useEffect, useState } from 'react'
import Orders from '../../adminPanel/Orders'
import Title from '../../adminPanel/Title'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Link from '@mui/material/Link'
import Pagination from '@mui/material/Pagination'
import { getAllProducts } from '../../../services/productos/productos'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add';
import ModalAddProducts from './modalAddProductos/modalAddProducts'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Modal, ModalHeader } from 'reactstrap'
// import { dataStore } from './../../../data/dataStore';

const TableProductosAdmin = () => {
    const [productos, setProductos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState();
    const [pages, setPages] = useState();

    /* Modal Fomrulario productos */
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getProductos = () => {
        getAllProducts(currentPage, 10)
            .then((res) => {
                console.log(res);
                setProductos(res.data.results);
                setTotalResults(res.data.total);

                // Calcular el número de páginas y redondear hacia arriba
                const countPages = Math.ceil(res.data.total / 10);

                setPages(countPages);
                console.log(res.data.results.length);
            })
            .catch((err) => console.log(err));
    };

    const handlePaginate = (event, value) => {
        setCurrentPage(value);

    }

    const handleModalAddProducts = () => {
        setIsModalOpen(true);
    }

    useEffect(() => {
        getProductos();

    }, [currentPage]);
    return (
        <div>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <React.Fragment>
                    <Title>Todos los productos</Title>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Categoria</TableCell>
                                <TableCell>Precio</TableCell>
                                <TableCell>Stock</TableCell>
                                <TableCell>Coleccion</TableCell>
                                <TableCell>Talla</TableCell>
                                <TableCell>Color</TableCell>
                                <TableCell>Tipo prenda</TableCell>
                                <TableCell>Acciones</TableCell>


                                {/* <TableCell align="right">Sale Amount</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productos.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.nombre}</TableCell>
                                    <TableCell>{row.categoria}</TableCell>
                                    <TableCell>{row.precio}</TableCell>
                                    <TableCell>{row.stock}</TableCell>
                                    <TableCell>{row.coleccion}</TableCell>
                                    <TableCell>{row.talla}</TableCell>
                                    <TableCell>{row.color}</TableCell>
                                    <TableCell>{row.tipo_prenda}</TableCell>
                                    <TableCell>
                                        <ButtonGroup
                                            disableElevation
                                            variant="contained"
                                            aria-label="Disabled elevation buttons"
                                        >
                                            <Button>Editar</Button>
                                            <Button color='error'>Eliminar</Button>
                                        </ButtonGroup>
                                    </TableCell>
                                    {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    {totalResults && totalResults >= 10 ? (
                        <Pagination count={pages} onChange={handlePaginate} />
                    ) : (null)}

                    {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                        See more orders
                    </Link> */}
                </React.Fragment>
            </Paper>
            <Fab
                variant="extended"
                onClick={handleModalAddProducts}
                style={{
                    position: 'fixed',
                    bottom: '20px', // Ajusta según sea necesario
                    right: '20px', // Ajusta según sea necesario
                }}>
                <AddIcon sx={{ mr: 1, }} />
                Agregar
            </Fab>
            <Modal
                size='lg'
                style={{ top: 60 }}
                isOpen={isModalOpen}
                toggle={() => setIsModalOpen(false)}

            >
                <ModalHeader toggle={() => setIsModalOpen(false)}>Ingresa aquí tu producto</ModalHeader>
                <ModalAddProducts handleClose={() => setIsModalOpen(false)} valueModalVisible={isModalOpen} />
            </Modal>
        </div>

    )
}

export default TableProductosAdmin
