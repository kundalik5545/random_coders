import React from "react";

const BlogLayout = ({ children }) => {
  return (
    <div className="container mx-auto p-6 max-w-screen-md shadow-lg">
      {children}
    </div>
  );
};

export default BlogLayout;
