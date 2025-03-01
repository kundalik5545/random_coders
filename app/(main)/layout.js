import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="container mx-auto max-w-3xl p-4 sm:p-0">{children}</div>
  );
};

export default MainLayout;
