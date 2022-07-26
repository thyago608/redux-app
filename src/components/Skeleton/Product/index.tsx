import { Skeleton } from "components/Skeleton";
import classes from "./styles.module.scss";

export function ProductSkeleton() {
  return (
    <div className={classes.container}>
      <Skeleton width={127} height={158} />
      <Skeleton width={248} height={40} />
      <Skeleton width={248} height={60} />
      <Skeleton width={248} height={38} />
    </div>
  );
}
