import { RATE } from "../types";

const initialState = [
  {
    image: "TheIrishman.jpg",
    name: "The Irishman",
    rate: 0
  },
  {
    image: "marriagestory.jpg",
    name: "Marriage Story",
    rate: 0
  },
  {
    image: "1917.jpg",
    name: "1917",
    rate: 0
  },
  {
    image: "parasite.jpg",
    name: "Parasite",
    rate: 0
  },
  {
    image: "antman.jpg",
    name: "Ant Man",
    rate: 0
  },
  {
    image: "littlewomen.jpg",
    name: "littlewomen",
    rate: 0
  },
  {
    image: "avengers.jpg",
    name: "Avengers",
    rate: 0
  },
  {
    image: "starwars.jpg",
    name: "Star Wars",
    rate: 0
  },
  {
    image: "onceuponatimeinhollywood.jpg",
    name: "Once Upon a Time in Hollywood",
    rate: 0
  },
  {
    image: "joker.jpg",
    name: "Joker",
    rate: 0
  },
  {
    image: "terminator.jpg",
    name: "Terminator",
    rate: 0
  }
 
  
];

export default (state = initialState, action) => {
  switch (action.type) {
    case RATE:
      const newState = [...state];
      newState[action.payload.id].rate = action.payload.value;
      return newState;
    default:
      return state;
  }
};
