import { useState, useEffect } from "react";
import Image from "next/image";
import { useCallback } from "react";
import { Product as ProductType } from "types";
import { ProductSkeleton } from "components/Skeleton/Product";
import { addProductToCart } from "store/modules/cart/extraReducers";
import { useDispatch } from "react-redux";
import { DispatchType } from "store/types";
import classes from "./styles.module.scss";

type ProductProps = {
  product: ProductType;
};

export function Product({ product }: ProductProps) {
  const dispatch = useDispatch<DispatchType>();
  const [isLoading, setIsLoading] = useState(true);

  const handleProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <ProductSkeleton />
  ) : (
    <div className={classes.container}>
      <div className={classes.image}>
        <Image src={product.photo} layout="fill" />
      </div>
      <div className={classes.heading}>
        <strong>{product.name}</strong>
        <span>{product.priceFormatted}</span>
      </div>
      <p className={classes.description}>{product.description}</p>
      <button
        type="button"
        className={classes.purchase}
        onClick={handleProductToCart}
      >
        Comprar
      </button>
    </div>
  );
}
