import { actionTypes } from "../actionsTypes";

const addAnimals = () => (dispatch) => {
  fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: actionTypes.animals.ADD_ANIMALS, payload: res });
    });
};

const animals = {
  addAnimals,
};

export const actions = {
  animals,
};
