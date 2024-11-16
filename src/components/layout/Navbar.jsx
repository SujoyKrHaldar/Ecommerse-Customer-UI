import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/svg/Logo";
import { Heart, Search, ShoppingCart, User, Menu } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Products",
    url: "/products",
  },
  {
    name: "Category",
    url: "/category",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const isLoggedin = false;

function Navbar() {
  return (
    <section className="container">
      <div className="flex items-center justify-between gap-8 bg-white px-4 py-3 border border-zinc-500">
        <div className="flex items-center gap-4">
          <Link className="pl-2 pr-6 border-r border-r-zinc-200" to="/">
            <Logo />
          </Link>

          <nav className="flex items-center gap-0">
            {navLinks.map((link) => (
              <NavLink
                className="hover:bg-zinc-100 py-3 px-5 duration-150"
                key={link.name}
                to={link.url}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <nav className="flex items-center gap-6">
          <Link title="Search" to="/search">
            <Search color="black" size={20} />
          </Link>

          <Link title="Wishlist" to="/wishlist">
            <Heart color="black" size={20} />
          </Link>

          <Link title="Cart" to="/cart">
            <ShoppingCart color="black" size={20} />
          </Link>

          <Link title="Account" to="/account">
            <User color="black" size={20} />
          </Link>

          {isLoggedin ? (
            <Link className="mr-4" title="Account" to="/account">
              <User color="black" size={20} />
            </Link>
          ) : (
            <Link
              className="bg-black text-white ml-2 flex items-center gap-2 pl-5 pr-6 py-3"
              to="/login"
            >
              <User color="white" size={18} />
              <p className="text-[0.9rem]">Login / Signup</p>
            </Link>
          )}

          <Menu className="hidden" color="black" size={24} />
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
