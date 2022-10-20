import { useRouter } from "next/router";
import React from "react";
import Header from "./Header";

function Layout({ children }: any) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/login" && <Header />}

      <div className="pl-32 pr-10 py-20">{children}</div>
    </>
  );
}

export default Layout;
