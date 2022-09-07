import Head from "next/head";
import React from "react";
import Contenedor from "../componentes/contenedor/Contenedor";

export default function Home({ dataIdWp }) {
  return (
    <>
      <Head>
        <title>{dataIdWp.acf.meta_titulo}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content={dataIdWp.acf.meta_descripcion} />
        <link
          rel="icon"
          href="../../../../apple-icon-180x180-1.ico"
          sizes="32x32"
        />
      </Head>
      <Contenedor>HOME</Contenedor>
    </>
  );
}

const idWp = "13837";
export async function getStaticProps() {
  const response = await fetch(
    `https://quickgold.es/wp-json/wp/v2/pages/${idWp}`
  );
  const dataIdWp = await response.json();

  // Pass data to the page via props
  return { props: { dataIdWp }, revalidate: 1 };
}
