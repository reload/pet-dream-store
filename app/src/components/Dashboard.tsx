import { gql } from "graphql-request";
import { useAllAnimalsQuery } from "../graphql/generated";
import React from "react";
import CardGrid from "./CardGrid";

gql`
  query allAnimals {
    animals {
      type
      name
      img
    }
  }
`;

const Dashboard = () => {
  const { status, isFetching, data } = useAllAnimalsQuery();

  return (
    <>
      <div className="navbar">
        <div className="navbar__headline">
          <h1>The Pet store CPH</h1>
        </div>
        <div className="navbar__nav">
          <span>Home</span>
          <span>About us</span>
          <span>Contact</span>
        </div>
      </div>

      <div className="filters">This is where the filters will be</div>

      <CardGrid />
    </>
  );
};

export default Dashboard;
