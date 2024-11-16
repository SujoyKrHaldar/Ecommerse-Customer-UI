import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function CategoryCard({ url, name, imgurl }) {
  return (
    <Link
      to={url}
      className="relative border py-8 hover:pb-16 duration-300 border-black w-[420px] h-[450px] flex items-end justify-center overflow-hidden group"
    >
      <p className="z-10 w-full border-b border-t border-black duration-300 tag text-center py-3 bg-white text-black font-bold">
        {name}
      </p>
      <img
        className="absolute w-full h-full inset-0 group-hover:scale-110 duration-500"
        src={imgurl}
        alt={name}
      />
    </Link>
  );
}

export default CategoryCard;
