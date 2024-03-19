import { FaCheckCircle } from "react-icons/fa";
const GymCard = ({ card }) => {
  const { price, name, pack, features, location } = card;
  return (
    <div className="border-gray-600  bg-gray-300 border-solid border-2  mt-3 rounded-md p-4 space-y-2">
      <h1 className="text-2xl font-bold text-center text-purple-700">{pack}</h1>
      <h2 className="text-base font-bold">Name : {name}</h2>
      <h2 className="text-base font-bold">Location : {location}</h2>
      <p className="text-base font-bold">Price: {price}</p>
      <ul>
        {features.map((feature) => (
          <li className="flex justify-start items-center gap-3">
            <FaCheckCircle /> {feature}{" "}
          </li>
        ))}
      </ul>
      <p className="text-center">
        <button className="bg-amber-400 text-base font-bold outline-none px-4 py-2 rounded-md ">
          JOIN NOW
        </button>
      </p>
    </div>
  );
};

export default GymCard;
