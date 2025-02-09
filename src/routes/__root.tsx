import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";
import { InitialState } from "../Store/Store.type";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { revertAll } from "../Store/actions";
import { useNavigate } from "@tanstack/react-router";


export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const rememberMe = useSelector((state: InitialState) => state.rememberMe);

  useEffect(() => {
    if (!rememberMe) {
      dispatch(revertAll());
      navigate({ to: "/" });
    }
  }, [rememberMe, dispatch, navigate]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer title="Copyright 2020 Argent Bank" />
    </>
  );
}
