import React from "react";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />          {/* Persistent header */}
      <main className="flex-1">{children}</main>  {/* Page content */}
      <Footer />          {/* Persistent footer */}
    </div>
  );
};

export default MainLayout;