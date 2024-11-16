import { Outlet, Navigate, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

function PrivateRoutes() {
  // const { authStatus, user } = useSelector((state) => state.auth);
  // const { pathname } = useLocation();

  // const user = false;

  // if (!user)
  //   return (
  //     <Navigate
  //       to={
  //         pathname !== "" ? `/login?redirectTo=${pathname.slice(1)}` : "/login"
  //       }
  //     />
  //   );

  return (
    <>
      <Outlet />
    </>
  );
}

export default PrivateRoutes;
