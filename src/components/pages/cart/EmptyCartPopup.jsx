import { Link, useNavigate } from "react-router-dom";

function EmptyCart() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <section className="container w-full py-16">
      <div className="relative max-w-lg mx-auto p-12 flex items-center justify-center">
        <div className="absolute w-full h-[65%] bg-white border border-zinc-500 bottom-0 left-0"></div>
        <div className="text-center flex items-center flex-col justify-center">
          <div className="w-[240px] h-auto">
            <img src="/assets/illustrations/empty-cart.png" alt="empty cart" />
          </div>
          <div className="mb-6">
            <h2>
              Your Cart is <span className="text-orange-700">Empty</span>
            </h2>
            <p>
              Looks like you have not added anything to your cart. Go add
              something for smooth checkout.
            </p>
          </div>

          <Link
            className="text-white border border-black bg-black py-3 px-8 w-full"
            to="/products"
          >
            Continue Shopping
          </Link>

          <Link
            className="text-black border border-black mt-2 bg-white py-2 px-8 w-full"
            onClick={handleClick}
          >
            Go Back
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EmptyCart;
