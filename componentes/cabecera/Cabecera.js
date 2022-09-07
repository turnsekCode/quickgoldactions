import Navbar from "../navbar/Navbar";
import NavBarMobil from "../navbarmobil/NavbarMobil";
import cabecera from "./cabecera.module.css";

export default function Cabecera() {
  return (
    <header className={cabecera.contenedor_cabecera}>
      <div className={cabecera.breadcrumbs}>
        Quickgold - Tiendas - Alcobendas - Quickgold Alcobendas
      </div>
      <div className={cabecera.logo_cabecera}>
        <img src="../../logo.png" alt="logo quickgold" />
      </div>
      <Navbar />
      <NavBarMobil />
    </header>
  );
}
