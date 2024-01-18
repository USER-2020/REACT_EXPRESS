import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/imgs/logo/Noble4.png";
import { AccountBox, AccountBoxIcon, ShoppingCart } from "@mui/icons-material";
import { Modal, ModalBody, ModalHeader, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import Login from "../AUTH/login.tsx";
import { currentRole, currentUser } from "../../services/defaultValues.tsx";
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import MenuItem from "@mui/material/MenuItem";
import { styled } from '@mui/system';
import { ButtonBase, IconButton } from "@mui/material";
import OpcionesUsuario from "../OPCIONES_USUARIO/opcionesUsuario.tsx";
import OpcionesAdmin from "../OPCIONES_ADMIN/opcionesAdmin.tsx";

const Navbar = () => {
  const randh = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const anchors = document.querySelectorAll("#select");

    anchors.forEach((anchor) => {
      let interval = null;

      anchor.onmouseover = (event) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return event.target.dataset.value[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
          }

          iteration += 1 / 3;
        }, 25);
      };
    });
  };

  const [modalLogin, setModalLogin] = useState(false);
  const currenUser = currentUser();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const roleUser = currentRole();

  useEffect(() => {
    randh();
  }, []);

  return (
    <div className="navb">
      <div className="navba">
        <div className="links">
          <div className="linkZ">
            <h1 className="colec">
              <a href="#" id="select" data-value="COLECCIONES">
                COLECCIONES
              </a>
            </h1>
          </div>
          <div className="linkZ">
            <h1 className="allp">
              <a href="#" id="select" data-value="PRODUCTOS">
                PRODUCTOS
              </a>
            </h1>
          </div>
          <div className="linkZ">
            <h1 className="gallery">
              <a href="#" id="select" data-value="GALERÍA">
                GALERÍA
              </a>
            </h1>
          </div>
        </div>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Noble de la montaña" />
          </a>
        </div>
        <div className="links">
          <h1 className="cart">
            <a href="#">
              <ShoppingCart sx={{ mr: 1 }} />
            </a>
          </h1>
          <h1 className="user">
            {currenUser ? (

              <a href="#" onClick={(e) => { e.preventDefault(); setShowOffcanvas(true) }}>
                <AccountBox sx={{ mr: 1 }} />
              </a>

            ) : (
              <a href="#" onClick={(e) => { e.preventDefault(); setModalLogin(true) }} >
                <AccountBox sx={{ mr: 1 }} />
              </a>
            )}
          </h1>
        </div>
      </div>
      <Modal isOpen={modalLogin} toggle={() => setModalLogin(false)} className="modal-dialog-centered modal-lg">
        <ModalHeader toggle={() => setModalLogin(false)}>¡ Hola de nuevo !</ModalHeader>
        <ModalBody>
          <Login handleClose={() => setModalLogin(false)} />
          {/* Puedes agregar cualquier contenido que desees aquí */}
        </ModalBody>
      </Modal>
      <Offcanvas
        isOpen={showOffcanvas}
        direction="end"
        toggle={() => setShowOffcanvas(false)}
      >
        <OffcanvasHeader toggle={() => setShowOffcanvas(false)}>

        </OffcanvasHeader>
        <OffcanvasBody>
          {roleUser && roleUser === 'ADMIN' ? (
            <OpcionesAdmin handleClose={() => setShowOffcanvas(false)} />
          ) : (
            <OpcionesUsuario handleClose={() => setShowOffcanvas(false)} />
          )}
        </OffcanvasBody>
      </Offcanvas>
    </div >

  );
};

export default Navbar;
