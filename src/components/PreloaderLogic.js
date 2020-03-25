import React, { useState } from "react";

const preloaderLogic = (Component, Skeleton) => props => {
  const [loading, setLoading] = useState(true);

  const styleHidden = {
    visibility: "hidden",
    width: 0,
    height: 0
  };

  return (
    <>
      {loading && <Skeleton />}
      <Component
        style={loading ? styleHidden : {}}
        loading={loading}
        setLoading={setLoading}
        {...props}
      />
    </>
  );
}


export default preloaderLogic;