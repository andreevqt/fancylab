import React, { useState, useEffect } from "react";
import { useScreenSize } from "../util/util";

const withWindow = (WrappedComponent) => {

  return (props) => {
    const [size, setSize] = useState({});
    useScreenSize(size => setSize(size));

    return <WrappedComponent {...props} size={size} />
  }
}

export default withWindow;