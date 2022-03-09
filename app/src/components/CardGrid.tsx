import React from "react";
import { AllAnimalsQuery } from "../graphql/generated";
import { AnimalData, Animal } from "./Interfaces";

// it is necessary to define the prop types here before they are recieved
interface Props {
  status: string;
  isFetching: boolean;
  data: AllAnimalsQuery | undefined;
}

const CardGrid: React.FC<Props> = ({ status, isFetching, data }) => {
  // if the data is not loaded, show loader
  if (status === "loading" || !data) {
    return <div>Loading</div>;
  }

  // I need to start using something else over console logs
  // asked some programmer friends what tools they use
  // What do you use Mikkel?
  // console.log(`status: ${status}`);
  // console.log(`isFetching: ${isFetching}`);
  // console.log(`data: ${JSON.stringify(data)}`);

  return (
    <div className="animal_grid">
      {data.animals.map((animal, index) => {
        return (
          <div className="card" key={index}>
            <img className="card__image" src={animal?.img} alt={animal?.name} />
            <div className="card__gradient"></div>
            <h2 className="card__headline">{animal?.name}</h2>
            <div className="card__body">
              <p className="card__body__type">{animal?.type}</p>
              <p className="card__body__description">Description.</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardGrid;
