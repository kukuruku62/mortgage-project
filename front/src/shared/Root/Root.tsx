import { Outlet } from "react-router-dom";
import { Footer } from "shared/Footer/Footer";


export const Root = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
