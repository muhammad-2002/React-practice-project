import { useEffect, useState } from "react";
import GymCard from "../GymCard";

const GymCards = () => {
  const [gymCards, setGymCards] = useState([]);
  console.log(gymCards);
  useEffect(() => {
    fetch("/GymInfo.json")
      .then((res) => res.json())
      .then((data) => setGymCards(data));
  }, []);

  return (
    <div className="mt-12">
      <div className=" w-11/12 md:w-[65%] text-center mx-auto space-y-4">
        <h1 className="text-4xl font-bold ">Build Your Body</h1>
        <p>
          Determine what you want to achieve with your body. Whether it's
          gaining muscle, losing fat, improving strength, or enhancing endurance
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-5 w-10/12 mx-auto">
        {gymCards.map((card) => (
          <GymCard card={card}></GymCard>
        ))}
      </div>
    </div>
  );
};

export default GymCards;
