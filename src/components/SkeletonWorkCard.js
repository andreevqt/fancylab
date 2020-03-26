import React from "react";
import Skeleton from "./Skeleton";

const SkeletonWorkCard = (props) => {
  return (
    <div className="skeleton-card">
      <Skeleton className="skeleton-card__image" />
      <Skeleton className="skeleton-card__title" />
      <Skeleton className="skeleton-card__description" width="70%" count={2} />
    </div>
  )
}

export default SkeletonWorkCard;