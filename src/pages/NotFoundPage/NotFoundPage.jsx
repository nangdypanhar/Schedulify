import { Link } from "react-router-dom";
import ErorrImage from "../../assets/errorImg.svg";

const NotFoundPage = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center  md:mt-50 mt-20">
        <img src={ErorrImage} alt="Image" className="w-65 sm:w-80" />
        <h1 className="text-2xl sm:text-4xl font-bold text-red-600">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Go Home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
