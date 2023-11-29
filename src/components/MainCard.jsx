import { Link } from "react-router-dom";

const MainCard = ({ title, day }) => {
  return (
    <Link to={`/${day}`}>
      <li className="text-xl mb-4 hover:text-red-400 mt-5 text-center border-b-2 bg-red-100 font-Orbit">
        <span className="font-semibold mr-2 ">Day {day}</span>
        <span>{title}</span>
      </li>
    </Link>
  );
};

export default MainCard;
