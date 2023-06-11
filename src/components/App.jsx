import { useState } from "react";
import "../index.css";
import { TouristRoutes } from "./TouristRoutes";

export const App = () => {
  const [routes, setRoutes] = useState([
    {
      id: 1,
      name: "Вишенське озеро",
      length: "12km",
      difficulty: "6/10",
      time: "3h",
    },
    {
      id: 2,
      name: "Черепашинецький кар'єр",
      length: "21km",
      difficulty: "9/10",
      time: "6h",
    },
  ]);

  console.log(routes);

  const handleDeleteRoute = (id) => {
    setRoutes(routes.filter((route) => route.id !== id));
  };

  return (
    <div className="tourist-routes_wrapper">
      {routes.map(({ id, name, length, difficulty, time }) => (
        <TouristRoutes
          key={id}
          name={name}
          length={length}
          difficulty={difficulty}
          time={time}
          onDeleteRoute={() => handleDeleteRoute(id)}
        />
      ))}
    </div>
  );
};
