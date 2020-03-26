import React from "react";

const toStr = (value) => {
  return typeof value === "number" ? value + "px" : value;
}

const Skeleton = ({
  className = "",
  width,
  height,
  count = 1,
}) => {

  const style = {
    width: toStr(width),
    height: toStr(height)
  };

  return [...Array(count)].map((elem, i) =>
    <span
      className={"skeleton " + className}
      style={style}
      key={i}
    >
      &zwnj;
    </span>
  );
}

export default Skeleton;