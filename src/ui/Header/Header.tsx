import { Link, useLocation } from "@tanstack/react-router";
import logoHeader from "../../assets/static/logo/argentBankLogo.png";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  return (
    <div className="flex flex-row justify-between items-center py-1 px-5">
      <Link to="/" className="text-green-700">
        <img
          src={logoHeader}
          alt="argent BANK"
          className="max-w-[200px] max-h-[55px]"
        />
      </Link>
      <div className="flex flex-row items-center text-[#2c3e50] gap-2">
        <FaUserCircle />
        {location.pathname === "/sign-in" ? (
          <Link to="/" className="font-bold mr-2 hover:underline">
            Sign-out
          </Link>
        ) : (
          <Link
            to="/sign-in"
            className="font-bold text-[#2c3e50]hover:underline"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
