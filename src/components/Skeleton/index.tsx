import { HTMLAttributes } from "react";
import classes from "./styles.module.scss";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width: number | string;
  height: number | string;
}

export function Skeleton({ width, height, ...rest }: SkeletonProps) {
  return (
    <div
      className={classes.container}
      style={{
        width,
        height,
      }}
      {...rest}
    ></div>
  );
}
