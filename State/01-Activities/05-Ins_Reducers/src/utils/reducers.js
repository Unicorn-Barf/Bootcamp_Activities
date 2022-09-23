import { ADD_CAR, REMOVE_CAR } from "./actions";
const randomNum = () => Math.floor(Math.random() * 20);


// The actoin type will be what reducers will use to determin ewhether or not
// a state should be updated
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CAR: {
      const newID = randomNum();
      const newCar = { ...action.payload, id: newID };

      return {
        ...state,
        cars: [...state.cars, newCar],
      };
    }
    case REMOVE_CAR: {
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};
