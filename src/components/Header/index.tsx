import Link from "next/link";
import { useSelector } from "react-redux";
import { FiShoppingBag } from "react-icons/fi";
import { useCartState } from "store/modules/cart/reducer";
import { useSidebar } from "hooks/useSidebar";
import classes from "./styles.module.scss";

export function Header() {
  const { handleOpenSidebar } = useSidebar();
  const items = useSelector(useCartState);

  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <Link href="/">
          <a>Compras online.com</a>
        </Link>
        <div
          className={`${classes.containerCart} ${
            items.length > 0 ? classes.itemsInCart : ""
          }`}
        >
          <button
            type="button"
            className={classes.cart}
            onClick={handleOpenSidebar}
          >
            <FiShoppingBag />
          </button>
          {items.length > 0 && (
            <span className={classes.itemsAmount}>{items.length}</span>
          )}
        </div>
      </div>
    </header>
  );
}
