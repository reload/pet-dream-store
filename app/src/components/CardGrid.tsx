import React from "react";
import { AllAnimalsQuery } from "../graphql/generated";
import Animal from "react-animals";
import { animalIcons, AnimalIconsInterface } from "../conf/animalIcons";

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

  // TODO: make sure that the description does not get cut off when there
  // is too much text

  if (!data.animals) {
    return null;
  }

  return (
    <div className="animal_grid">
      {data.animals.map((animal, index) => {
        return (
          <div className="card" key={index}>
            <img className="card__image" src={animal.img} alt={animal.name} />
            <div className="card__gradient"></div>
            <h2 className="card__headline">{animal.name}</h2>
            <span className="card__type">{animal.type}</span>
            <Animal
              name={
                animalIcons[animal.animal as keyof AnimalIconsInterface].name
              }
              color={
                animalIcons[animal.animal as keyof AnimalIconsInterface].color
              }
            />
            <div className="card__body">
              <p className="card__body__description">{animal.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardGrid;
