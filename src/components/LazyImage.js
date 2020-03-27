import React, { useEffect, useRef, useState } from "react";
import LazyLoad from "vanilla-lazyload";

if (typeof document !== "undefined" && !document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
    load_delay: 1500
  });
}

const LazyImage = ({
  alt,
  src,
  srcset,
  sizes,
  width,
  height,
  className = "",
  onLoad,
  style,
}) => {
  let el = null;
  useEffect(() => {
    /* if (typeof document !== "undefined" && document.lazyLoadInstance) {
      document.lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy",
        load_delay: 3000
      });
    } */

    if (typeof document !== "undefined") {
      document.lazyLoadInstance.update();
    }

    el.addEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    return () => {
      if (typeof document !== "undefined") {
        document.lazyLoadInstance.update();
      }
    }
  });

  return (
    <img
      ref={(element) => el = element}
      alt={alt}
      data-src={src}
      data-srcset={srcset}
      data-sizes={sizes}
      width={width}
      height={height}
      className={`lazy ${className}`}
      style={style}
    />
  )
}

export default LazyImage;