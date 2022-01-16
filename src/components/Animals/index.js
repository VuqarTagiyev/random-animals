import React from "react";
import Animal from "../Animal";
import "../../styles/animals.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions";
const Animals = () => {
  const { animals } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.animals.addAnimals());
  }, []);

  return (
    <div className="animals">
      {animals?.map((animal) => (
        <Animal key={animal.id} animal={animal} />
      ))}
    </div>
  );
};

export default Animals;
