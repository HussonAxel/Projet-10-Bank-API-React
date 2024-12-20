import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";


export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer
        title="Copyright 2020 Argent Bank"
      />
    </>
  ),
});
