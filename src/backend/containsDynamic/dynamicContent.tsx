import React from 'react'
import { useLocation } from 'react-router-dom';
import DashboardIndex from './dashboard/dashboardIndex';
import ClientesAdmin from './clientes/clientesAdmin';
import ProductosAdmin from './productos/productosAdmin';
import ColeccionesAdmin from './colecciones/coleccionesAdmin';
import OrdenesAdmin from './ordenes/ordenesAdmin';

const DynamicContentAdmin = () => {
    const location = useLocation();
    const renderDynamicContent = () => {
        switch (location.pathname) {
            case '/dashboard':
                return <DashboardIndex />;
            case '/productosAdmin':
                return <ProductosAdmin />;
            case '/clientesAdmin':
                return <ClientesAdmin />;
            case '/coleccionesAdmin':
                return <ColeccionesAdmin />;
            case '/ordenesAdmin':
                return <OrdenesAdmin />;
            // Agrega más casos según tus necesidades
            default:
                return <p>Ruta no encontrada</p>;
        }
    };

    return (
        <div>
            {/* <h2>Contenido Dinámico</h2> */}
            {renderDynamicContent()}
        </div>
    );
};
export default DynamicContentAdmin;
