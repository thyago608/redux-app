import { useState, useEffect } from "react";
import { ProductInCart } from "components/ProductInCart";
import { useSidebar } from "hooks/useSidebar";
import { FiX } from "react-icons/fi";
import {
  useCartState,
  removeAllProductsToCart,
} from "store/modules/cart/reducer";
import { useSelector, useDispatch } from "react-redux";
import classes from "./styles.module.scss";
import { AnimatedCart } from "components/AnimatedCart";
import { toast } from "react-toastify";

export function Sidebar() {
  const dispatch = useDispatch();
  const { isOpen, handleCloseSidebar } = useSidebar();
  const productsInCart = useSelector(useCartState);
  const [completedPurchase, setCompletedPurchase] = useState(false);

  const toastSuccessVisible = () =>
    toast.success("Compra realizada com sucesso!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const handleFinalizePurchase = () => {
    setCompletedPurchase(true);

    setTimeout(() => {
      handleCloseSidebar();
      dispatch(removeAllProductsToCart());

      toastSuccessVisible();
    }, 2000);
  };

  useEffect(() => {
    setCompletedPurchase(false);
  }, [isOpen]);

  return isOpen ? (
    <aside className={classes.container}>
      <section className={classes.content}>
        <header className={classes.heading}>
          <h2>Minhas Compras</h2>
          <button type="button" onClick={handleCloseSidebar}>
            <FiX />
          </button>
        </header>

        <div className={classes.productsList}>
          <div>
            {productsInCart.map((item) => (
              <ProductInCart key={item.product.id} product={item.product} />
            ))}
          </div>
        </div>
      </section>
      <div className={classes.purchaseContainer}>
        {productsInCart.length > 0 && (
          <button
            type="button"
            className={classes.purchase}
            onClick={handleFinalizePurchase}
          >
            {completedPurchase ? <AnimatedCart /> : "Comprar"}
          </button>
        )}
      </div>
    </aside>
  ) : null;
}
