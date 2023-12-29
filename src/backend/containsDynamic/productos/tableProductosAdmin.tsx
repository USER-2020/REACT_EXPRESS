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
import Modal from '@mui/material/Modal'
import ModalAddProducts from './modalAddProductos/modalAddProducts'
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
                let countPages = (res.data.total) / 10;
                setPages(countPages);
                console.log(res.data.results.length);
            }).catch((err) => console.log(err));

    }

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
                                    {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Pagination count={pages} onChange={handlePaginate} />

                    {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                        See more orders
                    </Link> */}
                </React.Fragment>
            </Paper>
            <Fab variant="extended"
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
            <Modal open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <ModalAddProducts handleClose={() => setIsModalOpen(false)} valueModalVisible={isModalOpen}/>
            </Modal>
        </div>

    )
}

export default TableProductosAdmin
