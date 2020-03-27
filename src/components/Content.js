import React from "react";

const Content = ({
  children,
  heading,
  ...rest
}) => {
  return (
    <div
      {...rest}
    >
      <div className="container">
        {
          heading &&
          <h2 className="section-heading">
            {heading}
          </h2>
        }
        {children}
      </div>
    </div>
  );
}

export default Content;