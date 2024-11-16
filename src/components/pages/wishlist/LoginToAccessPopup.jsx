import { Link } from "react-router-dom";

function LoginToAccessPopup() {
  return (
    <section className="container w-full pt-28">
      <div className="relative max-w-sm mx-auto p-12 pt-8 flex items-center justify-center">
        <div className="absolute w-full h-[65%] bg-white border border-zinc-500 bottom-0 left-0"></div>
        <div className="text-center flex items-center flex-col justify-center">
          <div className="w-[250px] h-[200px]">
            <img
              src="/assets/illustrations/required-login.png"
              alt="empty cart"
            />
          </div>
          <div className="mb-6 ">
            <h2>
              Please <span className="text-orange-700">Login</span>
            </h2>
            <p>Login to view items in your wishlist.</p>
          </div>

          <Link
            className="text-white border border-black bg-black py-3 px-8 w-full"
            to="/login"
          >
            Continue Login
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LoginToAccessPopup;
