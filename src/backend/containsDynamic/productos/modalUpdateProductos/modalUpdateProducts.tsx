import React, { useEffect, useState } from 'react'
import { productById, updateProduct } from '../../../../services/productos/productos';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import { Form } from 'reactstrap';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { categories } from '../../../data/categoriesData';
import { tallas } from '../../../data/tallasData';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Avatar, Button, Input } from '@mui/material';

const ModalUpdateProducts = ({ valueModalVisible, handleClose, updateProducts, idProducto }) => {
    const [productData, setProductData] = useState({
        nombre: '',
        categoria: '',
        precio: '',
        stock: '',
        coleccion: '',
        talla: '',
        color: '',
        tipo_prenda: '',
        imagenRuta: '',
    });
    const [imagenPreview, setImagenPreview] = useState(null);
    const [file, setFile] = useState(null);
    // const [file, setFile] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const fileName = `images/imgsProducts/${file.name}`;

            // Crear nuevo objeto FormData
            const formData = new FormData();

            // Agregar la imagen al objeto FormData
            formData.append('imagenRuta', file);

            // Actualizar el estado con el nombre del archivo
            setProductData((prevData) => ({
                ...prevData,
                imagenRuta: fileName,
            }));

            // Actualizar el estado para mostrar la previsualización temporal
            setImagenPreview(URL.createObjectURL(file));
            // Almacena el archivo en el estado
            setFile(file);

            // Imprimir formData en la consola para verificar
            console.log("formData con imagen:", formData);
        }
    };

    const infoProduct = () => {
        productById(idProducto)
            .then((res) => {
                console.log("Respuesta del producto por id", res);
                setProductData({
                    nombre: res.data.nombre,
                    categoria: res.data.categoria,
                    precio: res.data.precio,
                    stock: res.data.stock,
                    coleccion: res.data.coleccion,
                    talla: res.data.talla,
                    color: res.data.color,
                    tipo_prenda: res.data.tipo_prenda,
                    imagenRuta: res.data.imagenRuta,
                });
                // No uses URL.createObjectURL si solo tienes la URL de la imagen
                setImagenPreview(res.data.imagenRuta);

            }).catch((err) => { console.log(err) })
    }




    // const handleFileChange = (e) => {

    //     handleImageChange(e);
    // };

    const handleSubmit = () => {
        const formData = new FormData();

        // Agregar todos los campos al objeto FormData
        formData.append('nombre', productData.nombre);
        formData.append('categoria', productData.categoria);
        formData.append('precio', productData.precio);
        formData.append('stock', productData.stock);
        formData.append('coleccion', productData.coleccion);
        formData.append('talla', productData.talla);
        formData.append('color', productData.color);
        formData.append('tipo_prenda', productData.tipo_prenda);

        // Verificar si hay una imagen antes de agregarla
        if (file) {
            console.log(file);
            formData.append('imagen', file);
        }

        console.log(formData);
        // Enviar formData al servidor
        updateProduct(idProducto, formData)
            .then((res) => {
                console.log(res);
                handleClose();
                updateProducts();
            })
            .catch((err) => console.log(err));
    };


    useEffect(() => {
        infoProduct();
    }, [])
    return (
        <Fade in={valueModalVisible}>
            <Box sx={{ padding: '20px' }}>
                <Form onSubmit={handleSubmit} encType="multipart/form-data">
                    <FormGroup sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <TextField
                            label="Nombre"
                            name="nombre"
                            value={productData.nombre}
                            onChange={handleChange}

                            sx={{ mt: 2, width: '49%' }}
                        />
                        <Select
                            displayEmpty
                            value={productData.categoria}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            name='categoria'
                            sx={{ mt: 2, width: '49%' }}
                        >
                            <MenuItem disabled value="">
                                <em>Categorias...</em>
                            </MenuItem>
                            {categories.map((categoria) => (
                                <MenuItem
                                    key={categoria.id}
                                    value={categoria.name}
                                >
                                    {categoria.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormGroup>
                    <FormGroup sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

                        <TextField
                            label="Precio"
                            name="precio"
                            value={productData.precio}
                            onChange={handleChange}

                            sx={{ mt: 2, width: '49%' }}
                        />
                        <TextField
                            label="Stock"
                            name="stock"
                            value={productData.stock}
                            onChange={handleChange}

                            sx={{ mt: 2, width: '49%' }}
                        />
                    </FormGroup>
                    <FormGroup sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <TextField
                            label="Colección"
                            name="coleccion"
                            value={productData.coleccion}
                            onChange={handleChange}

                            sx={{ mt: 2, width: '49%' }}
                        />
                        <Select
                            displayEmpty
                            value={productData.talla}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            name='talla'
                            sx={{ mt: 2, width: '49%' }}
                        >
                            <MenuItem disabled value="">
                                <em>Tallas...</em>
                            </MenuItem>
                            {tallas.map((talla) => (
                                <MenuItem
                                    key={talla.id}
                                    value={talla.referencia}
                                >
                                    {talla.referencia}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormGroup>
                    <FormGroup sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <TextField
                            label="Color"
                            name="color"
                            value={productData.color}
                            onChange={handleChange}

                            sx={{ mt: 2, width: '49%' }}
                        />
                        <TextField
                            label="Tipo de prenda"
                            name="tipo_prenda"
                            value={productData.tipo_prenda}
                            onChange={handleChange}

                            sx={{ mt: 2, width: '49%' }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            // accept="image/*"
                            id="contained-button-file"
                            type="file"
                            name="imagen"
                            sx={{ display: 'none', mt: 2 }}
                            onChange={handleFileChange}
                        />

                        {imagenPreview && (
                            <Avatar
                                alt="Previsualización de la imagen"
                                src={imagenPreview}
                                sx={{ width: 200, height: 200, ml: 0, mt: 2 }}
                            />
                        )}
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" component="span" sx={{ mt: 2 }}>
                                Subir Imagen
                            </Button>
                        </label>
                    </FormGroup>

                    <Button onClick={handleSubmit} sx={{ mt: 2 }}>
                        Actualizar producto
                    </Button>
                    <Button onClick={handleClose} sx={{ mt: 2, ml: 2 }}>
                        Cerrar modal
                    </Button>
                </Form>
            </Box>
        </Fade>
    )
}

export default ModalUpdateProducts
