import React from "react";

const Content = ({
  children,
  ...rest
}) => {
  return (
    <div
      className="section section--after-hero"
      {...rest}
    >
      <div className="container">
        <div className="row">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Content;