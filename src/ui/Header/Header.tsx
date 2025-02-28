import { Link } from "@tanstack/react-router";
import logoHeader from "../../assets/static/logo/argentBankLogo.webp";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { InitialState } from "../../Store/Store.type";
import { revertAll } from "../../Store/actions";

const Header = () => {
  const token = useSelector((state: InitialState) => state.token);
  const firstName = useSelector((state: InitialState) => state.firstName);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row justify-between items-center py-1 px-5 h-[63px]">
      <Link to="/" className="text-green-700">
        <img
          src={logoHeader}
          alt="argent BANK"
          className="max-w-[200px] max-h-[55px]"
        />
      </Link>
      <div className="flex flex-row items-center text-[#2c3e50] gap-2">
        <Link to="/profile" className="font-bold hover:underline">
          <FaUserCircle />
        </Link>
        {token ? (
          <>
            <Link
              to="/profile"
              className="font-bold text-[#2c3e50] hover:underline"
            >
              {firstName}
            </Link>
            <FaSignOutAlt />
            <Link
              to="/"
              className="font-bold mr-2 hover:underline"
              onClick={() => dispatch(revertAll())}
            >
              Sign-out
            </Link>
          </>
        ) : (
          <Link
            to="/login"
            className="font-bold text-[#2c3e50] hover:underline"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
