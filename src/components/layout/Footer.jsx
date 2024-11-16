import { Link } from "react-router-dom";
import Logo from "../../assets/svg/Logo";

function Footer() {
  return (
    <footer className="mt-auto container pt-8 ">
      <div className="flex items-center justify-between gap-8 bg-white px-4 py-3 border border-black">
        <div className="flex items-center gap-4">
          <Link className="pl-2 pr-6 border-r border-r-zinc-200" to="/">
            <Logo />
          </Link>
          <p className="text-sm">Copyright 2025 - All rights reserved.</p>
          {/* <nav className="flex items-center gap-0">
              {navLinks.map((link) => (
                <NavLink
                  className="hover:bg-zinc-100 py-3 px-5 duration-150"
                  key={link.name}
                  to={link.url}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav> */}
        </div>

        <nav className="flex items-center gap-6">
          <Link to="/terms-&-conditions">Terms & conditions</Link>
          <Link to="/privacy-policy">Privacy policy</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
