import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";
import { InitialState } from "../Store/Store.type";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { revertAll } from "../Store/actions";
import { useNavigate } from "@tanstack/react-router";
import store from "../Store";


export const Route = createRootRoute({
  component: Root,
});

function Root() {

  const dispatch = useDispatch();

  const isConnected = useSelector(
    (state: InitialState) => state.isConnected
  );
  const rememberMe = useSelector(
    (state: InitialState) => state.rememberMe
  );

  const navigate = useNavigate();

useEffect(() => {
  if (isConnected && !rememberMe) {
    console.log("resetting user 15 minutes");
    const timeout = setTimeout(
      () => {
        alert("You have been disconnected due to inactivity");
        store.dispatch(revertAll());
      navigate({
        to: "/sign-in",
        replace: true,
      });      },
      900000
    );

      return () => clearTimeout(timeout);
    }
  }, [isConnected, rememberMe, dispatch, navigate]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer title="Copyright 2020 Argent Bank" />
    </>
  );
}
