import Cabecera from "../cabecera/cabecera";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <main className="layout">
        <Cabecera />
        {children}
        <Footer />
      </main>
    </>
  );
}
