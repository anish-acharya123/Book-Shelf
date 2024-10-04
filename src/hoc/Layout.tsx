import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-[1840px]  mx-auto  ">
      <section className="px-6 ">{children}</section>
    </main>
  );
};

export default Layout;
