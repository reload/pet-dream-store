import { gql } from "graphql-request";
import { useAllAnimalsQuery } from "../graphql/generated";
import React, { useEffect, useState } from "react";
import CardGrid from "./CardGrid";

// graphQL query definition
// TODO - move this to its own file
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
  // call for data + status of the transaction
  const { status, isFetching, data } = useAllAnimalsQuery();

  // navbar, filters, content(CardGrid component)
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
      <CardGrid status={status} isFetching={isFetching} data={data} />
    </>
  );
};

export default Dashboard;
