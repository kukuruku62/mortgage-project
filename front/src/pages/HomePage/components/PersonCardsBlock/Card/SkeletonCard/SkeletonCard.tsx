/// <reference types="vite-plugin-svgr/client" />

import SkeletonSVG from "assets/svg/skeleton-card.svg?react";
import styles from "./SkeletonCard.module.scss"

export const SkeletonCard = () => {
  return (
    <div className={styles.skeletonContainer}>
      <SkeletonSVG className={styles.skeleton} />
    </div>
  );
};
