import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="pt-36 pb-2 h-auto">
      <div className="absolute w-full h-[70%] inset-0"></div>
      <div className="container w-full -space-y-36">
        <div className="space-y-4 text-center z-20">
          <p className="tag">Save the wear</p>
          <h1 className="leading-[7rem] text-[8rem] font-medium">
            Discover the Perfect{" "}
            <span className=" italic text-orange-700">Blend of Style</span>
          </h1>
          <div className="flex items-center justify-center gap-4 pt-8">
            <Link
              className="text-white border border-black bg-black py-3 px-8"
              to="/products"
            >
              Explore Products
            </Link>
            <Link
              className="text-black border border-black bg-white py-3 px-8"
              to="/category"
            >
              View Collections
            </Link>
          </div>
        </div>
        <div className="w-full h-[500px] z-10 overflow-hidden border border-zinc-500">
          <img
            className="object-top"
            src="/assets/images/hero-section-bg-image.jpg"
            alt="hero-bg-image"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
