import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchBox from "../components/SearchBox";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-[1840px]  mx-auto  ">
      <section className="px-6 ">
        <div className="py-10 min-h-screen flex">
          <div className="flex w-full shadow-2xl rounded-md border-2 h-[91vh] ">
            <Navbar />
            <div className="bg-[#F3F3F7] w-5/6 p-5 flex flex-col gap-10 h-full">
              <SearchBox /> <div className="overflow-hidden">{children}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Layout;
