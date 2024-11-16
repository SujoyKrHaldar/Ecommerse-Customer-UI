import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function EmailExistPopup({ handleClick }) {
  return (
    <div className="relative max-w-lg mx-auto p-12 pt-8 flex items-center justify-center">
      <div className="absolute w-full h-[65%] bg-white border border-zinc-500 bottom-0 left-0"></div>
      <div className="text-center flex items-center flex-col justify-center">
        <div className="w-[240px] h-auto">
          <img src="/assets/illustrations/question.png" alt="email exits" />
        </div>
        <div className="mb-6">
          <h2>
            Email already <span className="text-orange-700">Exists</span>
          </h2>
          <p>
            We have found an existing account. If you would like to proceed with
            this account choose for Login. Or please change the email address to
            continue.
          </p>
        </div>

        <Link
          className="text-white border border-black bg-black py-3 px-8 w-full"
          to="/login"
        >
          Continue Login
        </Link>

        <p
          className="text-black border cursor-pointer border-black mt-2 bg-white py-2 px-8 w-full text-[0.9rem]"
          onClick={handleClick}
        >
          Change Email
        </p>
      </div>
    </div>
  );
}

export default EmailExistPopup;
