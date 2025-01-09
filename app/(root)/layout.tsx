import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Test Navbar Layout</h1>
      {children}
    </div>
  );
};
// the children prop is the content of the page

export default Layout;
