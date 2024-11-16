import { Link } from "react-router-dom";
import { CategoryCard } from "../../ui";

const productCategory = [
  {
    name: "Men's collection",
    url: "/category/men",
    imgurl:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    name: "Women's collection",
    url: "/category/women",
    imgurl:
      "https://images.pexels.com/photos/9213579/pexels-photo-9213579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function HeroCollection() {
  return (
    <section className="container py-16 bg-white space-y-4">
      <div className=" w-full h-auto flex items-center gap-6">
        <div className="h-[450px] flex-1 border-2 border-zinc-400 w-full bg-zinc-100 p-8 flex items-end">
          <div className="relative">
            <p className="tag">Latest one</p>
            <h2>
              New <span className="text-orange-700">Collections</span>
            </h2>
            <p>
              Unleash your style potential with our stunning assortment of
              contempory fasion designs.
            </p>

            <Link
              className="text-black border border-black bg-white py-3 px-8 inline-block mt-4"
              to="/category"
            >
              Explore all collection
            </Link>
          </div>
        </div>

        {productCategory.map((data, key) => (
          <CategoryCard key={key} {...data} />
        ))}
      </div>
    </section>
  );
}

export default HeroCollection;
