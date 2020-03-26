import { useEffect, useState } from "react";
import config from '../../gatsby-config';

export const latest = (arr, limit) => {
  return [...arr].reverse().slice(0, limit);
}

export const asset = (path) => {
  const env = process.env.GATSBY_ENV;
  return env === "production" && config.pathPrefix ? `${config.pathPrefix}${path}` : `${path}`;
}

export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const useWindowSize = () => {
  const isClient = typeof window !== 'undefined';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  console.log(windowSize);


  return windowSize;
}

export const styleHidden = {
  visibility: "hidden",
  position: "absolute",
  top: 0,
  left: 0,
  width: 0,
  height: 0
};

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

