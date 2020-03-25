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
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export const up = (breakpoint) => {
    
}

export const down = () => {

}

export const styleHidden = {
  visibility: "hidden",
  position: "absolute",
  width: 0,
  height: 0
};

