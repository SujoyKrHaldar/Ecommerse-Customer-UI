import { Link, useNavigate } from "react-router-dom";
import { MetaTags } from "../../components/shared";

function PageNotFound() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <MetaTags
        title="404 • Page not found • Ecommerse"
        description="Page not found"
        conicalRoute="/"
      />
      <section className="container w-full pt-[5rem]">
        <div className="relative pt-8 pb-16 flex items-center justify-center w-full h-full border border-black">
          <div className="text-center">
            <div className="w-[300px] h-[250px] mx-auto">
              <img src="/assets/illustrations/404.png" alt="empty cart" />
            </div>
            <div className="">
              <h1 className="text-[4rem]">
                Page is not <span className="text-orange-700">Found</span>
              </h1>
              <p className="max-w-md mx-auto">
                The page you are trying to access, is not available at this
                moment. Try again later. Navigate to some other pages.
              </p>

              <div className="flex items-center justify-center gap-4 pt-8">
                <Link
                  className="text-white border border-black bg-black py-3 px-8"
                  to="/products"
                >
                  Explore Products
                </Link>
                <Link
                  className="text-black border border-black bg-white py-3 px-8"
                  onClick={handleClick}
                >
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
