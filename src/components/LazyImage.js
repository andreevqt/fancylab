import React, { useEffect, useRef, useState } from "react";
import LazyLoad from "vanilla-lazyload";
import Skeleton from "react-loading-skeleton";

let lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy",
  load_delay: 1000
});

const LazyImage = ({
  alt,
  src,
  srcset,
  sizes,
  width,
  height,
  className = "",
  skeletonOpts = { width: "100%", height: "190px" }
}) => {
  let el = null;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    lazyLoadInstance.update();
    el.addEventListener("load", () => setLoading(false));
  }, []);

  useEffect(() => {
    return () => {
      lazyLoadInstance.update();
    }
  });

  return (
    <>
      {loading
        &&
        <Skeleton {...skeletonOpts} />
      }
      <img
        style={{ visibility: (loading ? "hidden" : "visible") }}
        ref={(element) => el = element}
        alt={alt}
        data-src={src}
        data-srcset={srcset}
        data-sizes={sizes}
        width={width}
        height={height}
        className={`lazy ${className}`}
      />
    </>
  )
}

export default LazyImage;