import Notification from "./Notification";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="z-50 fixed inset-0 w-full h-screen pointer-events-none py-5 flex flex-col justify-between">
      <Navbar />
      <Notification />
    </header>
  );
}

export default Header;
