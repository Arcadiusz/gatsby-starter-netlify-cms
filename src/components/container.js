import React from "react";

function Container({ children }) {
  return (
    <div className="Container" style={{ maxWidth: "800px", margin: "auto" }}>
      {children}
    </div>
  );
}

export default Container;
