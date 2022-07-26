import { useCallback } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";
import { addProductToCart } from "store/modules/cart/extraReducers";
import {
  useCartState,
  removeProductToCart,
  removeProductFromCartForced,
} from "store/modules/cart/reducer";
import { DispatchType } from "store/types";
import { Product } from "types";
import classes from "./styles.module.scss";

type ProductInCartProps = {
  product: Product;
};

export function ProductInCart({ product }: ProductInCartProps) {
  const dispatch = useDispatch<DispatchType>();
  const items = useSelector(useCartState);

  const productInCart = items.find((item) => item.product.id === product.id);

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch]);

  const handleRemoveProductToCart = useCallback(() => {
    dispatch(removeProductToCart(product.id));
  }, [dispatch]);

  const handleRemoveProductFromCartForced = useCallback(() => {
    dispatch(removeProductFromCartForced(product));
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <Image src={product.photo} layout="fill" />
      </div>
      <button
        type="button"
        className={classes.removeProduct}
        onClick={handleRemoveProductFromCartForced}
      >
        <FiX />
      </button>
      <div className={classes.content}>
        <h2>{product.name}</h2>
        <div className={classes.containerAmount}>
          <div className={classes.containerButtons}>
            <button type="button" onClick={handleRemoveProductToCart}>
              <FiMinus />
            </button>
            <span>{productInCart?.quantity}</span>
            <button type="button" onClick={handleAddProductToCart}>
              <FiPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
