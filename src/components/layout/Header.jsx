// import Notification from "./Notification";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="z-50 fixed inset-0 w-full h-fit py-5">
      {/* <Notification /> */}
      <Navbar />
    </header>
  );
}

export default Header;
