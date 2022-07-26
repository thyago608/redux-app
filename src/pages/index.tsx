import Head from "next/head";
import { GetServerSideProps } from "next";
import { Product as ProductType } from "types";
import { Product } from "components/Product";
import { ToastContainer } from "react-toastify";
import classes from "./home.module.scss";

type HomeProps = {
  products: ProductType[];
};

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Compras Online.com</title>
      </Head>
      <main className={classes.main}>
        <ToastContainer />
        <section className={classes.productList}>
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </section>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const items = await fetch("http://localhost:3333/products").then((response) =>
    response.json()
  );

  const productsFormatted = items.map((product: ProductType) => {
    return {
      ...product,
      priceFormatted: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(product.price),
    };
  });

  return {
    props: {
      products: productsFormatted,
    },
  };
};
