import Footer from "./Footer";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
